import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import DeleteButton from "./DeleteButton"

export const dynamicParams = true
// false -> if id doesn't exist, redirect to 404 page
// true -> if id doesn't exist, will generate a new page with that id, now can generate static page for future requests to that ticket

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies })

  // once data is returned, call it "ticket" -> cuz we're calling ticket.title instead of data.title
  const { data: ticket } = await supabase.from('tickets')
  .select()
  .eq('id', params.id)
  .single()

  return {
    title: `Ryo's Helpdesk | ${ticket?.title || "Ticket not found"}`
  }
}

async function getTicket(id) {
  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.from('tickets')
  .select()
  .eq('id', id)
  .single()

  if (!data) {
    notFound() // this is a function from Next -> will redirect to 404 page
    // can be overridden by writing a not-found.jsx file
  }
  
  return data;
}


export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id) // id can be a number, string, etc.

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <div>

      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session.user.email === ticket.user_email && (
            <DeleteButton id={ticket.id} />
          )}
        </div>
      </nav>

      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>

    </div>
  )
}

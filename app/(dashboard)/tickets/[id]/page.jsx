import { notFound } from "next/navigation"

export const dynamicParams = true
// false -> if id doesn't exist, redirect to 404 page
// true -> if id doesn't exist, will generate a new page with that id, now can generate static page for future requests to that ticket

export async function generateMetadata({ params }) {
  
  // params: Next.js generated object. Contains all the params in the URL. To extract the id, you can do params.id
  const id = params.id

  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const ticket = await res.json() // read response body as json

  return {
    title: `Dojo Helpdesk | ${ticket.title}`
  }
}

// assuming you want the component which needs to render data on the fly statically, you can use this. Will pre-fetch all the required id's, so when it builds the application, it knows all of the pages and routes it needs to make.
// this is used when your revalidate value is not 0. if it's 0, you're basically rendering everything dynamically anw, so no need to statically render anything.
// having this function makes app pages load faster
export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets')
  const tickets = await res.json()

  return tickets.map((ticket) => (
    { id: ticket.id }
  ))
}

async function getTicket(id) {
  
  const res = await fetch('http://localhost:4000/tickets/' + id, {
    next: {
      revalidate: 0 
    }
  })

  if (!res.ok) {
    notFound() // this is a function from Next -> will redirect to 404 page
    // can be overridden by writing a not-found.jsx file
  }
  
  return res.json();
}


export default async function TicketDetails({ params }) {
  
  const ticket = await getTicket(params.id) // id can be a number, string, etc.
  // now when you type localhost:3000/tickets/1, it will show the ticket with id 1

  return (
    <div>

      <nav>
        <h2>Ticket Details</h2>
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

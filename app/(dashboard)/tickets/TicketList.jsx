import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'

async function getTickets() {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from('tickets')
  .select()

  if (error) {
    console.log(error.message)
  }

  return data
}

export default async function TicketList() {
  const tickets = await getTickets()
  return (
    <div>
      {tickets.map((ticket) => (
        // can use "key" prop to help React keep track of the elements in the array
        <div key={ticket.id} className="card my-5">

          <Link href={`/tickets/${ticket.id}`}> 
            {/* now if you click on wtv is inside here, you will be redirected to the above link */}
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>

            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>

        </div>
      ))}

      {/* if there are no tickets, display a message */}
      {tickets.length === 0 && (
        <p className="text-center">
          There are no open tickets.
        </p>
      )}
    </div>
  )
}
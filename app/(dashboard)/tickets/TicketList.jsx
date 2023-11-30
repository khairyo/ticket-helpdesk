import Link from 'next/link'

async function getTickets() {
  // imitate delayed response - 3 seconds
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0 // 30: if i revisit the page within 30 seconds and refresh, it will use the cached result from first call; but if i revisit the page after 30 seconds and refresh, it will make another request to the server
      // 0: data will never be cached
      // since this portion fetches data and is constantly being re-rendered, cannot use static rendering. However, if the revalidation time is long enough, Next will be confident that for that time period, the content here wouldn't change so can use static component here. When the time elapses, will fetch the content and rebuild the page using static rendering.
    }
  }) // this is a promise, so we need to await it
  // if you call this same line again somewhere else in the app, it will not call twice, it will use the cached result from first call
  // caches data indefinitely
  
  return res.json(); // if you're directly returning, not assigning to variable, no need "await"
}

export default async function TicketList() {
  const tickets = await getTickets() // this is a promise, so we need to await it
  
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
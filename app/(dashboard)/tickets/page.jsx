import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from "../Loading";
import Link from "next/link";

export const metadata = { 
  title: 'Dojo Helpdesk | Tickets'
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
        <Link href='/tickets/create' className="ml-auto">
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>

      {/* wrapping this in suspense makes it so the WHOLE page (excluding Navbar) won't be overwritten with the loading screen; only the potion wrapped in <Suspense> */}
      <Suspense fallback={ <Loading /> }>
        <TicketList />
      </Suspense>
      
    </main>
  )
}
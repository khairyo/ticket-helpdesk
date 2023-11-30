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
      </nav>

      {/* wrapping this in suspense makes it so the WHOLE page (excluding Navbar) won't be overwritten with the loading screen; only the potion wrapped in <Suspense> */}
      <Suspense fallback={ <Loading /> }>

        <div className="flex justify-center my-8">
          <Link href="./tickets/create">
            <button className="btn-primary">Create Ticket</button>
          </Link>
        </div>

        <TicketList />

      </Suspense>
      
    </main>
  )
}
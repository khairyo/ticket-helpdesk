// making a new folder for api's is pointless if you're only fetching data from server / server component (bc you can simple call api within the component file itself). This is only required when you're fetching data from a client component.

import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // makes this route dynamic - it will be called on every request - but honestly don't need it?? still works without it. but um i wrote it jic in future there's a case it doesn't work.

// when a request comes into this route and it's a GET request, it will call this function
export async function GET() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0
    } // this one also just makes it dynamic; either or with the one on top
  })
  const tickets = await res.json()

  return NextResponse.json(tickets, {
    status: 200 // set status code of the response to 200
  })
}

// request is the thing that comes in from the client
export async function POST(request) {
  const ticket = await request.json()

  // add ticket object to database
  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(ticket) 
  })

  const newTicket = await res.json()

  return NextResponse.json(newTicket, {
    status: 201
  })
}
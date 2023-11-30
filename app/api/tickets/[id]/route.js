// dynamic route file - need to make it dynamic bc we need to fetch data from the server based on the id of the ticket

import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  const res = await fetch(`http://localhost:4000/tickets/${params.id}`)
  const ticket = await res.json()

  if (!res.ok) {
    return NextResponse.json({ error: 'Cannot find the ticket'}, {
      status: 404
    })
  }

  return NextResponse.json(ticket, {
    status: 200
  })
}
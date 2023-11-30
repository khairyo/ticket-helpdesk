// the [...] notation is a catch-all route, which means that any route that isn't matched by a more specific route will be matched by this one.

// this function will serve us the nearest not-found component it can find, which is the (dashboard)/not-found.jsx component.
import { notFound } from 'next/navigation'

export default function NotFound() {
  return (
    notFound()
  )
}
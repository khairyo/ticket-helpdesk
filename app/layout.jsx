import './globals.css'
import { Rubik } from 'next/font/google'

export const dynamic = 'force-dynamic' // Next.js will not try to statically build anything
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = { // accessible on every page, but can be overridden
  title: "RyoTech Helpdesk",
  description: 'A Ticket Helpdesk',
}

// "children" refers to the current page component being viewed in the browser
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>

        {children}

      </body>
    </html>
  )
}

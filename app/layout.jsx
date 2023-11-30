// wtv is in this parent layout file will also wrap around child layouts.

import './globals.css'
import { Rubik } from 'next/font/google'

// components
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = { // accessible on every page, but can be overridden
  title: 'Dojo Helpdesk',
  description: 'A Dojo Helpdesk',
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

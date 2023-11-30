import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
			<Image 
				src={Logo} 
				alt="Dojo Logo" 
				width={70} 
				quality={100} // best quality
				// placeholder="blur" // blur effect while loading, based on current colors in the image
			/> 

			<h1>Dojo Helpdesk</h1>

			<Link href="/">Dashboard</Link> 
			<Link href="/tickets">Tickets</Link> 
			{/* Link components are pre-fetched in the background, so by the time you click on the link you will be redirected to the next page v fast */}
			{/* these links aren't blue and underlined bc we have tailwind installed with this app, and tailwind strips out all default browser styles */}
    </nav>
  )
}

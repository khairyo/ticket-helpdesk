import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'
import Logout from './LogoutButton'

export default function Navbar({ user }) {
  return (
    <nav>
			<Image 
				src={Logo} 
				alt="Dojo Logo" 
				width={70} 
				quality={100} // best quality
				// placeholder="blur" // blur effect while loading, based on current colors in the image
			/> 

			<h1>Ryo's Helpdesk</h1>
			<Link href="/">Dashboard</Link> 
			<Link href="/tickets" className='mr-auto'>Tickets</Link> 
			{/* Link components are pre-fetched in the background, so by the time you click on the link you will be redirected to the next page v fast */}
			{/* these links aren't blue and underlined bc we have tailwind installed with this app, and tailwind strips out all default browser styles */}
			{/* mr-auto: since these are all flex items, now everything to the right of current <Link> will be to extreme right of the page */}

			{user && <span>Hello, {user.email}</span>}
			<Logout />
    </nav>
  )
}

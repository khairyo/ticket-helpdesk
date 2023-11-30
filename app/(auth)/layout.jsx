import Link from 'next/link'
import Image from 'next/image'
import Logo from '../components/dojo-logo.png'

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <Image 
          src={Logo} 
          alt="Dojo Logo" 
          width={70} 
          quality={100}
        /> 
        <h1>Dojo Helpdesk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </nav>

      {children}

    </>
  )
}

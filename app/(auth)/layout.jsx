import Link from 'next/link'
import Image from 'next/image'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// components
import Logo from '../components/dojo-logo.png'

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()
  if (data.session) { // protecting routes
    redirect('/')
  }

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

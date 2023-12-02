import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

//components
import Navbar from '../components/navbar'

// "children" refers to the current page - however limited only to files within the dashboard folder
export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession() // returns object with data property; here you are destructuring the object and pulling out the data property

  if (!data.session) { // protecting routes
    // router can only be used in client components. since this is a server component, you need to use redirect.
    redirect('/login')
  }

  return (
    <>
      <Navbar user={data.session.user}/>
      {children}
    </>
  )
}

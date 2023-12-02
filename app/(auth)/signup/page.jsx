"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"  // connect to Supabase project -> for auth, connecting to db

// components
import AuthForm from "../AuthForm"

export default function Signup() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')

    const supabase = createClientComponentClient() // now in client component so use this function 

    // returns an object with error property - by saying "const {error}" you are destructuring the object and pulling out the error property
    // NOTE: all "error" variables outside this function are referring to the useState error variable, not this one
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback` 
        // supabase will send email to user to verify email address
        // location.origin is the current domain; redirects to route.js that will handle the redirect. subsequently, will gain access to special code within request url, and can send that code to supabase to say user has been verified, and we'd like to exchange that code for a new session
      }
    }) // sign up user with email and password
    
    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/verify')
    } 
  }

  return (
    <main>
      <h2 className="text-center">Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  )
}
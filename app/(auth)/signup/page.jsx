"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"; // connect to Supabase project -> for auth, connecting to db

import AuthForm from "../AuthForm";

export default function Signup() {

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const supabase = createClientComponentClient(); // one supabase client object 

    console.log('user signup', email, password);
  }

  return (
    <main>
      <h2 className="text-center">Sign up</h2>
      <AuthForm handleSubmit={handleSubmit}/>
    </main>
  )
}

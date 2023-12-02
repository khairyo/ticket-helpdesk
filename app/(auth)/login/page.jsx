"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react";
import { useRouter } from "next/navigation";

// components
import AuthForm from "../AuthForm";

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError(''); // clear error message

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } if (!error) {
      router.push('/')
    }
  }

  return (
    <main>
      <h2 className="text-center">Log in</h2>

      {/* pass in handleSubmit as such so bc you declared it in this file -> not directyl accessible in AuthForm.jsx */}
      <AuthForm handleSubmit={handleSubmit}/>

      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  )
}
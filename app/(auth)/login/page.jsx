"use client"
import AuthForm from "../AuthForm";

export default function Login() {

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log('user login', email, password);
  }

  return (
    <main>
      <h2 className="text-center">Log in</h2>

      {/* pass in handleSubmit as such so bc you declared it in this file -> not directyl accessible in AuthForm.jsx */}
      <AuthForm handleSubmit={handleSubmit}/>
    </main>
  )
}
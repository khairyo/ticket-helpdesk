"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter() // redirect user after they submit the form

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [priority, setPriority] = useState("low")
  const [isLoading, setIsLoading] = useState(false) // when you submit the form, change this to true to show some loading state

  const handleSubmit = async (e) => {
    e.preventDefault() // prevent the form from refreshing the page

    setIsLoading(true)

    // make ticket object
    const ticket = {
      title,
      body,
      priority,
      user_email: "mario@gmail.com"
    }

    // add ticket object to database
    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {"Content-Type": "application/json"}, // means that content sent is in json format
      body: JSON.stringify(ticket) // stringify: convert object to json
    })

    if (res.status === 201) {
      router.refresh() // to re-fetch required data; currently your revalidate is set to 30, so won't show added data until after 30s. This is a workaround to fix that.
      // doesn't work all the time. set revalidate value to 0 for surefire way to see added data immediately.

      // if req has succeeded, redirect user to tickets page
      router.push("/tickets")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">

      <label>
        <span>Title:</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>

      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>

      <label>
        <span>Priority:</span>
        <select 
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>

      <button 
        className="btn-primary" 
        disabled={isLoading} // after they've clicked the button once, disable it so they can't click it again
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add Ticket</span>}
    </button>

    </form>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Welcome to Ryo's Helpdesk, your central hub for viewing support tickets directed to <strong>RyoTech.Co</strong>. Whether you're a user seeking assistance or a support agent handling requests, this dashboard provides a comprehensive overview of all open tickets. View tickets here at your leisure, or submit a ticket if you are in need of assistance from our support team or technicians.</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of our web development team!</h3>
        <p>Please join us in welcoming Khai Ryo, the newest addition to our web development team! We are thrilled to have her on board, and we're already looking forward to the fantastic projects she is bringing to life. With a wealth of skills and a passion for innovation, Khai Ryo is set to embark on numerous exciting endeavors that will undoubtedly enhance our web development landscape. Stay tuned for the amazing work she has in store for us!</p>
      </div>
      <div className="card">
        <h3>🌐 Tech Marvels Unveiled at the Digital Innovation Expo! 🚀</h3>
        <p>Get ready to immerse yourself in the ultimate tech extravaganza! The Digital Innovation Expo is just around the corner, and the excitement is palpable. This year, we're thrilled to announce that groundbreaking products and technologies will take center stage! 
        <br /><br />
        Picture this: cutting-edge gadgets, revolutionary software, and mind-blowing innovations that will reshape the future. From the latest in AI to sleek IoT devices, our tech wizards have been working tirelessly to bring you the next generation of digital marvels.
        <br /><br />
        As you step into the convention, be prepared to witness the unveiling of products that will redefine the way we live, work, and connect. It's not just a showcase; it's an experience that will leave you inspired and awestruck.
        <br /><br />
        Stay tuned as we count down to the moment when the tech world converges at the Digital Innovation Expo. Your journey into the future of technology is about to begin! 🌐✨
        </p>
      </div>
    </main>
  )
}
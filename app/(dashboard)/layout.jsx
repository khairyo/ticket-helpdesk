import Navbar from '../components/navbar'

// "children" refers to the current page - however limited only to files within the dashboard folder
export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

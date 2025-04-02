import Invitation from './components/invitation'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
     <Invitation/>
     <Analytics/>
    </>
  )
}

export default App

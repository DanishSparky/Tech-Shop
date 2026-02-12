import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "../src/components/Navbar"
import Routings from "../src/Routing/Routings"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routings />
    </>
  )
}

export default App

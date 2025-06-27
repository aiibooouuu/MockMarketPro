import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from '../components/Navbar.jsx'
import Home from '../components/Home.jsx'
import Profile from '../components/Profile.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import CreateProfile from "../components/Create"
import SelfProfile from "../pages/SelfProfile"

function HomePage() {
  const [count, setCount] = useState(0)

  return (
<>
      <Navbar />

      <Home />
      <Profile />
      <About />
      <Contact />
</>
  )
}

export default HomePage


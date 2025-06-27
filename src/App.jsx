import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreateProfile from "./components/Create"
import SelfProfile from "./pages/SelfProfile"
import ViewStocks from "./pages/ViewStocks"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view-stocks" element={<ViewStocks />} />  
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/self-profile" element={<SelfProfile />} />
      </Routes>
    </Router>
  )
}

export default App

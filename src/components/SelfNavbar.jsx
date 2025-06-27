import React from "react"
import "./Navbar.css" // Use your existing navbar styles if needed
import "./SelfNavbar.css" // Import specific styles for SelfNavbar
function SelfNavbar() {
return (
    <nav className="navbar">
    <div className="navbar_logo">
                <a href="#home">
                <img src="/logo2.png" alt="Vite Logo" />
                <span>Investment App</span>
                </a>
            </div>
    {/* No nav links, everything else blank */}
    </nav>
)
}

export default SelfNavbar
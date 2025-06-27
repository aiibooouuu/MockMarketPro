import React, { useState, useRef, useEffect } from "react"
import './Navbar.css'

function Navbar() {
    const [active, setActive] = useState("home")
    const [sliderStyle, setSliderStyle] = useState({})
    const linksRef = {
        home: useRef(null),
        portfolio: useRef(null),
        about: useRef(null),
        contact: useRef(null),
    }

    useEffect(() => {
        const node = linksRef[active].current
        if (node) {
            setSliderStyle({
                left: node.offsetLeft,
                width: node.offsetWidth,
            })
        }
    }, [active])

    return (
        <div className="navbar">
            <div className="navbar_logo">
                <a href="#home">
                <img src="/logo2.png" alt="Vite Logo" />
                <span>Investment App</span>
                </a>
            </div>
            <div className="navbar_links" style={{ position: "relative" }}>
                <div className="navbar_slider" style={sliderStyle}></div>
                <a
                    href="#home"
                    ref={linksRef.home}
                    className={active === "home" ? "active" : ""}
                    onClick={() => setActive("home")}
                >
                    Home
                </a>
                <a
                    href="#profile-section"
                    ref={linksRef.portfolio}
                    className={active === "portfolio" ? "active" : ""}
                    onClick={() => setActive("portfolio")}
                >
                    Portfolio
                </a>
                <a
                    href="#about"
                    ref={linksRef.about}
                    className={active === "about" ? "active" : ""}
                    onClick={() => setActive("about")}
                >
                    About
                </a>
                <a
                    href="#contact"
                    ref={linksRef.contact}
                    className={active === "contact" ? "active" : ""}
                    onClick={() => setActive("contact")}
                >
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Navbar;

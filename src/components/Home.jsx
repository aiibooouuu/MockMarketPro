import React from "react"
import "./Home.css"

function Home() {
return (
    <section id="home" className="home-section" style={{ position: "relative" }}>
    <div className="home-info animate-fadein-left">
        <h1>
        Start <span className="highlight">Investing</span> Now
        </h1>
        <p>
        Welcome to <b>Investment App</b> – the perfect place for beginners to learn investing with fake money/coins!
        Practice trading, build your portfolio, and gain confidence without any real risk.
        </p>
        <div className="home-stats">
        <div>
            <span className="stat-num">xxx</span>
            <span className="stat-label">xxx-xxx-xxx</span>
        </div>
        <div>
            <span className="stat-num">xxx</span>
            <span className="stat-label">xxx-xxx-xxx</span>
        </div>
        <div>
            <span className="stat-num">0</span>
            <span className="stat-label">Real Money Lost</span>
        </div>
        </div>
    </div>
    <div className="home-image animate-fadein-right">
        <div className="home-img-bg"></div>
        <img src="/logo2.png" alt="App Logo" />
    </div>
    </section>
)
}

export default Home
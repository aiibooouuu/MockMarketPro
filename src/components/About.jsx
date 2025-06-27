import React from "react"
import { FaReact, FaDatabase, FaServer, FaGithub, FaChartLine } from "react-icons/fa"
import { SiMongodb, SiKaggle } from "react-icons/si"
import "./About.css"

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-bento">
        <div className="about-main-rect">
          <h2>About Us</h2>
          <p>
            <b>Investment App</b> is a modern, interactive platform for learning how to invest and trade stocks—risk free! Our mission is to make stock market education accessible, practical, and fun for everyone.
          </p>
          <p>
            <b>How it works:</b> You get a virtual balance of fake money (coins) to simulate real trading. Buy and sell stocks, track your portfolio, and learn from your results—all without risking real money.
          </p>
          <ul className="about-steps">
            <li><span className="step-num">1</span> Sign up and get your virtual coins.</li>
            <li><span className="step-num">2</span> Explore real market data and pick stocks to trade.</li>
            <li><span className="step-num">3</span> Build your portfolio, track your performance, and compete on leaderboards.</li>
            <li><span className="step-num">4</span> Learn, experiment, and gain confidence before investing for real!</li>
          </ul>
        </div>
        <div className="about-side-rects">
          <div className="about-tech about-side-box">
            <h3>Technologies Used</h3>
            <ul>
              <li><FaReact className="about-icon react" /> Frontend: <b>React.js</b></li>
              <li><SiMongodb className="about-icon mongo" /> Database: <b>MongoDB</b></li>
              <li><FaServer className="about-icon server" /> Backend: <b>Node.js / Express</b></li>
              <li><FaGithub className="about-icon github" /> Code Hosting: <b>GitHub</b></li>
            </ul>
          </div>
          <div className="about-data about-side-box">
            <h3>Data Sources</h3>
            <ul>
              <li><SiKaggle className="about-icon kaggle" /> <b>Kaggle</b> (historical stock data)</li>
              <li><FaChartLine className="about-icon yahoo" /> <b>Yahoo Finance</b> (live & historical prices)</li>
              <li><FaDatabase className="about-icon db" /> Multiple curated datasets and APIs</li>
            </ul>
            <div className="about-note">
              <p>
                All trades and portfolios are virtual. Our app fetches and simulates stock data from various sources, providing a realistic trading experience with fake money and coins. Learn, experiment, and build your skills—risk free!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
import React, { useState } from "react"
import "./Profile.css"
import CreateProfile from "./Create.jsx"
import ViewProfile from "./View.jsx"

function Profile() {
  const [showCreate, setShowCreate] = useState(false)
  const [showView, setShowView] = useState(false)

  return (
    <section className="profile-section" id="profile-section">
      <div className="profile-content">
        <div className="profile-info">
          <h2>
            <span role="img" aria-label="user">👤</span> Your Investment Journey Starts Here
          </h2>
          <p>
            <b>Investment App</b> is your safe, interactive gateway to the stock market. Simulate real trading, build your portfolio, and learn investment strategies—all with virtual coins and zero risk.
          </p>
          <p>
            Create your own investor profile, track your progress, and compete on leaderboards. Perfect for beginners and anyone looking to sharpen their skills in a realistic, risk-free environment.
          </p>
          <div className="profile-actions">
            <button className="profile-btn" onClick={() => setShowCreate(true)}>
              Create Your Profile
            </button>
            <button className="profile-btn secondary" onClick={() => setShowView(true)}>
              View Profile
            </button>
          </div>
        </div>
        <div className="profile-features">
          <div className="feature-box">
            <span className="feature-icon" role="img" aria-label="shield">🛡️</span>
            <h3>Zero Risk</h3>
            <p>Trade and invest with virtual coins. No real money is involved, so you can learn and experiment freely.</p>
          </div>
          <div className="feature-box">
            <span className="feature-icon" role="img" aria-label="chart">📈</span>
            <h3>Real Market Simulation</h3>
            <p>Experience real-world stock market scenarios and portfolio management, just like professional investors.</p>
          </div>
          <div className="feature-box">
            <span className="feature-icon" role="img" aria-label="user">👥</span>
            <h3>Personalized Profiles</h3>
            <p>Create your own investor profile, track your growth, and compare your performance with others.</p>
          </div>
          <div className="feature-box">
            <span className="feature-icon" role="img" aria-label="trophy">🏆</span>
            <h3>Progress Tracking</h3>
            <p>Monitor your virtual portfolio, analyze your trades, and build confidence before investing real money.</p>
          </div>
        </div>
      </div>
      {showCreate && <CreateProfile onClose={() => setShowCreate(false)} />}
      {showView && <ViewProfile onClose={() => setShowView(false)} />}
    </section>
  )
}

export default Profile
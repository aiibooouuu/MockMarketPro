import React from "react"
import SelfNavbar from "../components/SelfNavbar"
import Card from "../components/Card"
import Sidebar from "../components/Sidebar"
import BankCard from "../components/BankCard"
import "./SelfProfile.css"
import Favourites from "../components/Favourites"

function SelfProfile() {
  const user = JSON.parse(localStorage.getItem("selfProfileUser"))

  return (
    <div className="selfprofile-root">
      <SelfNavbar />
      <div className="selfprofile-main">
        <Sidebar />
        <div className="selfprofile-content">
          <div className="profile-cards-row">
            <div className="profile-half">
              <Card user={user} />
            </div>
            <div className="profile-half">
              <BankCard />
            </div>
          </div>
          <div className="favourites-section">
            <Favourites />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelfProfile
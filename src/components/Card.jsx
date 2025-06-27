import React from "react";
import "./Card.css";

function Card({ user }) {
if (!user) return <div>No user data found.</div>;

return (
    <div className="card business-card">
    <div className="card-header">
        <div className="avatar">
        {user.name ? user.name[0].toUpperCase() : "U"}
        </div>
        <div>
        <h2>{user.name}</h2>
        <div className="job-title">Investor</div>
        </div>
    </div>
    <hr className="card-divider" />
    <div className="card-details">
        <div>
        <span className="label">Email:</span>
        <span className="value">{user.email}</span>
        </div>
        <div>
        <span className="label">Phone:</span>
        <span className="value">{user.phone}</span>
        </div>
    </div>
    </div>
);
}

export default Card;

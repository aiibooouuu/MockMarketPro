import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
return (
    <aside className="sidebar">
    <nav className="sidebar-nav">
        <NavLink to="/self-profile" className="sidebar-link" end>
        Home
        </NavLink>
        <NavLink to="/view-stocks" className="sidebar-link">
        View Stocks
        </NavLink>
        <NavLink to="/portfolio" className="sidebar-link">
        Your Portfolio
        </NavLink>
    </nav>
    </aside>
);
}

export default Sidebar;
import React, { useState } from "react"
import { FaPhone, FaLock, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa"
import "./Create.css"

function ViewProfile({ onClose }) {
const [form, setForm] = useState({
    phone: "",
    password: "",
})
const [showPassword, setShowPassword] = useState(false)

const handleSubmit = async (e) => {
    e.preventDefault()
    // You can implement actual profile lookup logic here
    alert(`Phone: ${form.phone}\nPassword: ${form.password}\n(View logic not implemented)`)
    onClose()
}

return (
    <div className="create-modal">
    <div className="create-modal-content">
        <button className="create-close-btn" onClick={onClose}>
        <FaTimes />
        </button>
        <h2>View Your Profile</h2>
        <form className="create-form" onSubmit={handleSubmit}>
        <div className="input-group">
            <FaPhone className="input-icon" />
            <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            required
            />
        </div>
        <div className="input-group">
            <FaLock className="input-icon" />
            <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            required
            />
            <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowPassword(v => !v)}
            tabIndex={-1}
            >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
        <button className="create-submit-btn" type="submit">
            View Profile
        </button>
        </form>
    </div>
    </div>
)
}

export default ViewProfile
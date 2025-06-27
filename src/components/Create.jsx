import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaUser, FaEnvelope, FaPhone, FaLock, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa"
import "./Create.css"

function CreateProfile() {
const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
})
const [showPassword, setShowPassword] = useState(false)
const [showConfirm, setShowConfirm] = useState(false)
const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        if (res.ok) {
            // Store user info locally
            localStorage.setItem("selfProfileUser", JSON.stringify({ ...form, _id: data._id || data.id }));
            // Redirect to SelfProfile
            navigate("/self-profile");
        } else {
            alert(data.error || 'Error creating profile');
        }
    } catch (err) {
        alert('Server error');
    }
};

return (
    <div className="create-modal">
    <div className="create-modal-content">
        <button className="create-close-btn">
        <FaTimes />
        </button>
        <h2>Create Your Profile</h2>
        <form className="create-form" onSubmit={handleSubmit}>
        <div className="input-group">
            <FaUser className="input-icon" />
            <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            />
        </div>
        <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
            />
        </div>
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
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
            >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
        <div className="input-group">
            <FaLock className="input-icon" />
            <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
            required
            />
            <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowConfirm((v) => !v)}
            tabIndex={-1}
            >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
        <button className="create-submit-btn" type="submit">
            Create Profile
        </button>
        </form>
    </div>
    </div>
)
}

export default CreateProfile
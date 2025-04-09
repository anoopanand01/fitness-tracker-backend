import React, { useState } from 'react';

const Register = ({ onRegister }) => {
    const [userData, setUserData] = useState({ name: '', email: '', password: '' });

    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onRegister(userData);
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h2>Register</h2>
            <input name="name" placeholder="Name" value={userData.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;

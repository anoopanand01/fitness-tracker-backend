import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/users/register', formData);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            navigate('/dashboard'); // or login
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                <form onSubmit={handleRegister} className="space-y-4">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg" required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg" required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg" required />
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;

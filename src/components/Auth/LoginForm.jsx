import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation and mock login logic
        if (username === 'test' && password === 'password') {
            window.location.href = '/';
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <img src={Logo} alt="Logo" width={64} height={64} className="mx-auto mb-2" />
            <h2 className="mb-8 text-2xl font-bold text-center">Login.</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-6 text-right">
                    <a
                        className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                        href="/reset-password"
                    >
                        Forgot your password?
                    </a>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="w-full px-4 py-2 font-bold text-white transition delay-75 rounded bg-gradient-to-b from-pink-500 to-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline hover:translate-y-1"
                        type="submit"
                    >
                        Log In
                    </button>
                </div>
                <div className="mt-4 text-center">
                    <a
                        className="inline-block text-sm font-bold text-blue-500 align-baseline bg-from-pink-500 to-blue-500 hover:text-blue-800"
                        href="/register"
                    >
                        Don’t have an account? Sign up
                    </a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
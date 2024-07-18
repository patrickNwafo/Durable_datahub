import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };

    return (
        <div>
            <img src={Logo} width={64} height={64} alt="Logo" className="mx-auto mb-2" />
            <h2 className="mb-4 text-xl font-bold text-center">Create Account.</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fullname">
                        Fullname
                    </label>
                    <input
                        id="fullname"
                        type="text"
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Enter your fullname"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailError ? 'border-red-500' : ''
                            }`}
                        placeholder="Enter your email"
                    />
                    {emailError && <p className="text-xs italic text-red-500">{emailError}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
                        Adress
                    </label>
                    <input
                        id="address"
                        type="address"
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="referral">
                        Referral Username (Optional)
                    </label>
                    <input
                        id="referral"
                        type="text"
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Enter referral username"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Confirm your password"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="terms">
                        <input
                            id="terms"
                            type="checkbox"
                            className="mr-2 leading-tight"
                        />
                        I agree to the terms and conditions
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="w-full px-4 py-2 font-bold text-white transition delay-75 rounded bg-gradient-to-b from-pink-500 to-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline hover:translate-y-1"
                        type="submit"
                    >
                        Create my Account
                    </button>
                </div>
                <div className="mt-4 text-center">
                    <a
                        className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                        href="/login"
                    >
                        Already have an account? Sign In
                    </a>
                </div>
            </form>
        </div>

    );
};

export default RegisterForm;
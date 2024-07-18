import React from 'react';
import RegisterForm from '../components/Auth/RegisterForm';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-500 to-blue-500"></div>
            <div className="relative w-full max-w-md p-8 bg-white rounded shadow-md">
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
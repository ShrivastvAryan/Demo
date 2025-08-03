'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const router = useRouter();

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  // 🔐 Redirect to dashboard if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/'); // Replace with your protected route
    }
  }, [router]);

  const loginState = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful!');
        localStorage.setItem('token', data.token); // ✅ Save JWT token

        setTimeout(() => {
          router.push('/'); // 🔐 Redirect to protected route
        }, 1000);
      } else {
        toast.error(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginState();
  };

  return (
    <div className="justify-center items-center flex flex-col h-screen bg-gray-100">
      <ToastContainer position="top-center" autoClose={3000} />
      <h1 className="text-4xl text-center font-semibold">Login</h1>

      <div className="w-72 md:w-96 mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSubmit}>
          <label className="text-lg font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={loginFormData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
            placeholder="Enter your email"
            required
          />

          <label className="text-lg font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={loginFormData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
            placeholder="Enter your password"
            required
          />

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p className="pt-2 font-semibold my-2">
            Don&apos;t have an account?{' '}
            <Link className="text-blue-600" href="/Register">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

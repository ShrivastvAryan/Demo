'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    amount_raised:'',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/'); 
    }
  }, [router]);

  const regState = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Registration successful!');
        localStorage.setItem('token', data.token); 
        
        setTimeout(() => {
          router.push('/'); 
        }, 1000);
      } else {
        toast.error(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    regState();
  };

  return (
    <div className="justify-center items-center flex flex-col h-screen bg-gray-100">
      <ToastContainer position="top-center" autoClose={3000} />
      <h1 className="text-4xl text-center font-semibold">Create Your Account</h1>

      <div className="w-72 md:w-96 mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSubmit}>
          <label className="text-lg font-semibold">Enter Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded mt-2 mb-4 border border-gray-300 focus:outline-blue-300"
            placeholder="Enter your name"
            required
          />

          <label className="text-lg font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4 focus:outline-blue-300"
            placeholder="Enter your email"
            required
          />

          <label className="text-lg font-semibold">Amount Raised</label>
          <input
            type="number"
            name="amount_raised"
            value={formData.amount_raised}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4 focus:outline-blue-300"
            placeholder="Enter amount raised"
            required
          />

          <label className="text-lg font-semibold">Create Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4 focus:outline-blue-300"
            placeholder="Enter your password"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-500 text-white p-2 hover:bg-blue-600 rounded-md ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <p className="pt-2 font-semibold my-2">
            Already have an account?{' '}
            <Link className="text-blue-600" href="/Login">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

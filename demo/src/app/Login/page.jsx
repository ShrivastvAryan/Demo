'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', loginFormData);
    // Add logic to send data to backend here
  };

  return (
    <div className='justify-center items-center flex flex-col h-screen bg-gray-100'>
      <h1 className='text-4xl text-center font-semibold'>Login</h1>

      <div className='w-72 md:w-96 mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-lg bg-white'>
        <form onSubmit={handleSubmit}>
          <label className='text-lg font-semibold'>Email</label>
          <input
            type='email'
            name='email'
            value={loginFormData.email}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded mt-2 mb-4'
            placeholder='Enter your email'
            required
          />

          <label className='text-lg font-semibold'>Password</label>
          <input
            type='password'
            name='password'
            value={loginFormData.password}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded mt-2 mb-4'
            placeholder='Enter your password'
            required
          />

          <button
            type='submit'
            className='w-full bg-blue-500 text-white p-2 hover:bg-blue-600 rounded-md'
          >
            Login
          </button>

          <p className='pt-2 font-semibold my-2'>
            Don&apos;t have an account?{' '}
            <Link className='text-blue-600' href='/Register'>
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

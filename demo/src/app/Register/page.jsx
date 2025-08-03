'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Register = () => {
    // State to hold form data
    const[formData, setFormData] = useState({
        userName:"",
        email:"",
        password:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({   ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic to send data to backend here
  };

  return (
     <div className='justify-center items-center flex flex-col h-screen bg-gray-100'>
      <h1 className='text-4xl text-center font-semibold'>Create Your Account </h1>

      <div className='w-72 md:w-96 mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-lg'>
        <form onSubmit={handleSubmit} >
          <span className='text-lg font-semibold '>Enter Your Name</span>
          <input type='text' value={formData.userName} onChange={handleChange} name="userName" className="w-full p-2 rounded mt-2 mb-4 border border-gray-300  focus:outline-blue-300" placeholder='Enter your email' required />


          <span className='text-lg font-semibold '>Email</span>
          <input type='email' value={formData.email} onChange={handleChange} name="email" className='w-full p-2 border border-gray-300 rounded mt-2 mb-4 focus:outline-blue-300' placeholder='Enter your email' required />

          <span className='text-lg font-semibold'>Create Password</span>
          <input type='password' value={formData.password} onChange={handleChange} name="password" className='w-full p-2 border border-gray-300 rounded mt-2 mb-4 focus:outline-blue-300 ' placeholder='Enter your password' required />

          <button type='submit' className='w-full bg-blue-500 text-white p-2  hover:bg-blue-600 rounded-md'>Create Account</button>

          <p className='pt-2 font-semibold my-2'>Already have account? <Link className='text-blue-600' href='/Login'> Login here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full h-16 bg-white border-b border-gray-200 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            
            {/* Logo/Brand Section */}
            <div className='flex items-center'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8  bg-blue-600 rounded-lg flex items-center justify-center'>
                  <span className='text-white font-bold text-sm'>SC</span>
                </div>
                <h1 className='text-xl font-bold text-gray-900 tracking-tight'>
                  She Can Foundation
                </h1>
              </div>
            </div>

            {/* Navigation Links */}
            <div className='hidden md:flex items-center space-x-8'>
              <a href="#" className='text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group'>
                Home
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full'></span>
              </a>
              <a href="#" className='text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group'>
                Data
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full'></span>
              </a>
              <a href="#" className='text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group'>
                About
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full'></span>
              </a>
              <a href="#" className='text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group'>
                Contact
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full'></span>
              </a>
            </div>

            {/* Login Section */}
            <div className='flex items-center gap-4'>
              <button className='hidden sm:block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'>
                Sign In
              </button>
              <button className='text-white bg-blue-600 px-6 py-2 rounded-lg font-medium '>
                Get Started
              </button>
              
              {/* Mobile menu button */}
              <button className='md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors duration-200'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
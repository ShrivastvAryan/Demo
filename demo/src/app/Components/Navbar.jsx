'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/Login');
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className='w-full h-16 bg-white border-b border-gray-200 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>SC</span>
              </div>
              <h1 className='text-xl font-bold text-gray-900'>She Can Foundation</h1>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              <Link href="#" className='text-black hover:text-blue-600 font-medium'>Home</Link>
              <Link href="#" className='text-black hover:text-blue-600 font-medium'>Data</Link>
              <Link href="#" className='text-black hover:text-blue-600 font-medium'>About</Link>
              <Link href="#" className='text-black hover:text-blue-600 font-medium'>Contact</Link>
            </div>

            {/* Auth + Mobile Menu */}
            <div className='flex items-center gap-4 relative'>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className='text-gray-700 hidden sm:block hover:text-red-600 font-medium transition'
                >
                  Logout
                </button>
              ) : (
                <Link href='/Login' className='hidden sm:block text-gray-700 hover:text-blue-600 font-medium'>
                  Login
                </Link>
              )}

              {/* Hamburger for mobile */}
              <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                <AlignJustify className='w-6 h-6 text-gray-700' />
              </button>

              {/* Mobile dropdown menu */}
              {isOpen && (
                <ul className="absolute top-14 right-0 bg-white shadow-lg rounded-md w-44 p-4 space-y-3 z-50 border">
                  <li>
                    <Link href="#" onClick={closeMenu} className="block hover:text-blue-600 font-medium">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={closeMenu} className="block hover:text-blue-600 font-medium">
                      Data
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={closeMenu} className="block hover:text-blue-600 font-medium">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={closeMenu} className="block hover:text-blue-600 font-medium">
                      Contact
                    </Link>
                  </li>
                  {!isLoggedIn && (
                    <li>
                      <Link href="/Login" onClick={closeMenu} className="block text-blue-600 font-medium">
                        Login
                      </Link>
                    </li>
                  )}
                  {isLoggedIn && (
                    <li>
                      <button onClick={() => { handleLogout(); closeMenu(); }} className="w-full text-left text-red-600 font-medium">
                        Logout
                      </button>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

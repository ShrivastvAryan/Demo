'use client';
import React, { useEffect, useState } from 'react';
import { User, TrendingUp, Target, Award, IndianRupee,Lock } from 'lucide-react';
import { toast } from 'react-toastify';

const Hero = () => {
  const [userData, setUserData] = useState(null);
  
  const prizes=[
    {
      id:1,
      level:'Level One',
      amount:'₹20,000'
    },
    {
      id:2,
      level:'Level Two',
      amount:'₹30,000'
    },
    {
      id:3,
      level:'Level Three',
      amount:'₹40,000'
    },
    {
      id:4,
      level:'Level Four',
      amount:'₹50,000'
    },

  ]

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          toast.error('No token found. Please login.');
          return;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUserData(data.user);
        } else {
          toast.error(data.message || 'Failed to fetch user');
        }
      } catch (error) {
        console.error('Fetch user error:', error);
        toast.error('Something went wrong');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 my-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {userData?.name || 'User'}!
        </h1>
        <p className="text-gray-600">
          Here's your impact summary and fundraising progress
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-fit">
            <div className="flex flex-col items-center text-center">
              {/* Profile Avatar */}
              <div className="relative mb-6">
                <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Profile Info */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {userData?.name || 'Loading...'}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {userData?.role || 'Member'}
              </p>

              {/* Referral Code */}
              <div className="w-full bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Referral Code
                </p>
                <p className="font-mono text-lg font-semibold text-blue-600">
                  {userData?.ref_code || '---'}
                </p>
                <button
                  className="mt-2 text-xs text-blue-600"
                  onClick={() => {
                    navigator.clipboard.writeText(userData?.ref_code || '');
                    toast.success('Referral code copied!');
                  }}
                >
                  Copy Code
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Your Dashboard</h2>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">+12% this month</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Total Raised */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <IndianRupee className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">
                    +{userData?.amount_raised || 0} this month
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{userData?.amount_raised||0}</h3>
                <p className="text-sm text-gray-600">Total Amount Raised</p>
              </div>

              {/* Goals Achieved , they are hard coded */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full">
                    3 active
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">8</h3>
                <p className="text-sm text-gray-600">Campaigns Completed</p>
              </div>
            </div>
          </div>
          
      
                  {/* Hard Coded */}
      <div className='w-full bg-white mt-4 rounded-lg shadow-lg'>
      <h1 className='font-bold p-4 text-2xl'>Your Rewards</h1>

       {/* Container for reward cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {prizes.map((prize, key) => (
        <div
        key={key}
        className="h-40 rounded-xl bg-pink-200 border border-pink-500 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105"
      >
        <Lock className='w-16 h-16 text-pink-500' />
        <p className='font-semibold text-center text-sm mt-4 mx-2 text-pink-500'>
          Collect {prize.amount} or more to collect this
        </p>
        </div>
       ))}
      </div>
       </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

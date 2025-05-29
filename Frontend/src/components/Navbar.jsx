import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext'; // Adjust the import path as necessary


const Navbar = () => {


  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useContext(AuthContext);


  return (

    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-blue-600">SocialApp</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}

          {(() => {
            if (!user) {
              return (
                <>
                  <button onClick={() => navigate("/login")} className={`px-3 py-2 rounded text-left ${page === "login" ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}>Login</button>
                  <button onClick={() => navigate("/signup")} className={`px-3 py-2 rounded text-left ${page === "signup" ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}>Signup</button>
                </>
              );
            }
            return (
              <>
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium transition duration-150">
                  Logout
                </button>
              </>
            );
          })()}

          <div className="flex items-center space-x-4">

            <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium transition duration-150">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
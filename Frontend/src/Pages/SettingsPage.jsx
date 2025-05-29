import React, { useState } from 'react';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    bio: 'Digital creator | Photography enthusiast',
    notifications: true,
    darkMode: false,
    privateAccount: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings logic here
    alert('Settings saved!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Reuse the same navbar from homepage */}

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar (same as homepage) */}

          {/* Main settings content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-6 text-gray-900">Account Settings</h1>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Profile Section */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900">Profile Information</h2>
                    <div className="flex items-center mb-6">
                      <img 
                        src="https://randomuser.me/api/portraits/men/10.jpg" 
                        alt="Profile" 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <button 
                          type="button" 
                          className="bg-gray-200 px-4 py-2 rounded-md text-sm font-medium"
                        >
                          Change Photo
                        </button>
                        <p className="text-xs text-gray-500 mt-1">
                          JPG, GIF or PNG. Max size 2MB
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          rows="3"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                        />
                      </div>
                    </div>
                  </div>

                 

                  
                  {/* Actions Section */}
                  <div className="border-t border-gray-200 pt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
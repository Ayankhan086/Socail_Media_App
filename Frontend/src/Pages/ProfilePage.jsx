import React, { useState } from 'react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  const user = {
    name: 'John Smith',
    username: 'johnsmith',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    bio: 'Digital creator | Photography enthusiast | Travel lover',
    posts: 142,
    followers: 1042,
    following: 287,
    isVerified: true
  };

  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', likes: 124, comments: 14 },
    { id: 2, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', likes: 89, comments: 5 },
    // More posts...
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main profile content */}
          <div className="flex-1">
            {/* Profile header */}
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="text-2xl font-bold flex items-center justify-center md:justify-start">
                        {user.name}
                        {user.isVerified && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </h1>
                      <p className="text-gray-600">@{user.username}</p>
                    </div>
                    <div className="flex space-x-2 mt-3 md:mt-0">
                      <button 
                        className={`px-4 py-2 rounded-md text-sm font-medium ${isFollowing ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                        onClick={() => setIsFollowing(!isFollowing)}
                      >
                        {isFollowing ? 'Following' : 'Follow'}
                      </button>
                      <button className="p-2 rounded-md bg-gray-200 hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <p className="my-4 text-gray-700">{user.bio}</p>

                  <div className="flex justify-center md:justify-start space-x-6 border-t border-gray-200 pt-4">
                    <div className="text-center">
                      <span className="font-bold">{user.posts}</span>
                      <span className="block text-sm text-gray-500">Posts</span>
                    </div>
                    <div className="text-center">
                      <span className="font-bold">{user.followers}</span>
                      <span className="block text-sm text-gray-500">Followers</span>
                    </div>
                    <div className="text-center">
                      <span className="font-bold">{user.following}</span>
                      <span className="block text-sm text-gray-500">Following</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile tabs */}
            <div className="bg-white rounded-lg shadow mb-4">
              <div className="flex border-b border-gray-200">
                <button
                  className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'posts' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('posts')}
                >
                  Posts
                </button>
                <button
                  className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'saved' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('saved')}
                >
                  Saved
                </button>
                <button
                  className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'tagged' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('tagged')}
                >
                  Tagged
                </button>
              </div>
            </div>

            {/* Profile content */}
            {activeTab === 'posts' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts.map(post => (
                  <div key={post.id} className="relative group cursor-pointer">
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
                      <div className="flex space-x-4 text-white">
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No saved posts</h3>
                <p className="text-gray-500">
                  Save photos and videos that you want to see again
                </p>
              </div>
            )}

            {activeTab === 'tagged' && (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No tagged photos</h3>
                <p className="text-gray-500">
                  When people tag you in photos, they'll appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
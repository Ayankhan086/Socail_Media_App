import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import axios from 'axios';



const HomePage = () => {



  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'johndoe',
      userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      content: 'Just finished my new project! So excited to share it with everyone!',
      likes: 24,
      comments: 5,
      time: '2h ago'
    },
    {
      id: 2,
      username: 'janedoe',
      userImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      content: 'Beautiful day at the park today! #nature #sunshine',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      likes: 42,
      comments: 8,
      time: '4h ago'
    }
  ]);

  const [suggestions, setSuggestions] = useState([
    { id: 1, username: 'mike123', mutualFriends: 3 },
    { id: 2, username: 'sarah_k', mutualFriends: 5 },
    { id: 3, username: 'alex_w', mutualFriends: 2 },
    { id: 4, username: 'emily_j', mutualFriends: 1 }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;
    
    const newPost = {
      id: posts.length + 1,
      username: 'currentuser',
      userImage: 'https://randomuser.me/api/portraits/men/10.jpg',
      content: newPostContent,
      likes: 0,
      comments: 0,
      time: 'Just now'
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar */}
          {/* Main Feed */}
          <div className="flex-1">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <form onSubmit={handlePostSubmit}>
                <div className="flex items-start space-x-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/10.jpg" 
                    alt="User" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <textarea
                    className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="What's on your mind?"
                    rows="3"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                  <div className="flex space-x-2">
                    <button type="button" className="flex items-center text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Photo
                    </button>
                    <button type="button" className="flex items-center text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Video
                    </button>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition duration-150"
                    disabled={!newPostContent.trim()}
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
            
            {/* Posts Feed */}
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow p-4 mb-4">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.userImage} 
                      alt={post.username} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{post.username}</h4>
                      <p className="text-gray-500 text-sm">{post.time}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* Post Content */}
                <div className="mb-4">
                  <p className="text-gray-800">{post.content}</p>
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="w-full h-auto rounded-lg mt-3 object-cover max-h-96"
                    />
                  )}
                </div>
                
                {/* Post Actions */}
                <div className="flex justify-between border-t border-b border-gray-100 py-2 text-gray-500">
                  <button className="flex items-center justify-center flex-1 py-2 hover:bg-gray-50 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    Like ({post.likes})
                  </button>
                  <button className="flex items-center justify-center flex-1 py-2 hover:bg-gray-50 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Comment ({post.comments})
                  </button>
                  <button className="flex items-center justify-center flex-1 py-2 hover:bg-gray-50 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Sidebar */}
          <div className="w-full md:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4 sticky top-20">
              <h3 className="font-semibold text-gray-700 mb-4">People you may know</h3>
              
              {suggestions.map(user => (
                <div key={user.id} className="flex items-center justify-between mb-4 last:mb-0">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={`https://randomuser.me/api/portraits/${user.id % 2 === 0 ? 'women' : 'men'}/${user.id}.jpg`} 
                      alt={user.username} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{user.username}</h4>
                      <p className="text-gray-500 text-sm">{user.mutualFriends} mutual friends</p>
                    </div>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                    Follow
                  </button>
                </div>
              ))}
              
              <button className="w-full mt-4 text-blue-500 hover:text-blue-700 text-sm font-medium text-center">
                See All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
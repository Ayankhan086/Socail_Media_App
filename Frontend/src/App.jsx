import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MessagesPage from "./Pages/MessagesPage";
import Navbar from "./components/Navbar";
import ProfilePage from "./Pages/ProfilePage";
import SettingsPage from "./Pages/SettingsPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignUpPage";
import { AuthContext, AuthProvider } from "./components/AuthContext";
import { useContext } from "react";


// Sidebar component with navigation
function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname.replace("/", "") || "home";

  return (
    <aside className="w-48 bg-white p-6 flex flex-col space-y-4 min-h-screen">
      <button onClick={() => navigate("/")} className={`px-3 py-2 rounded text-left ${page === "home" ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}>Home</button>
      <button onClick={() => navigate("/profile")} className={`px-3 py-2 rounded text-left ${page === "profile" ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}>Profile</button>
      <button onClick={() => navigate("/messages")} className={`px-3 py-2 rounded text-left ${page === "messages" ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}>Messages</button>
      <button onClick={() => navigate("/settings")} className={`px-3 py-2 rounded text-left ${page === "settings" ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}>Settings</button>
      {(() => {
        const { user } = useContext(AuthContext);
        if (!user) {
          return (
            <>
              <button onClick={() => navigate("/login")} className={`px-3 py-2 rounded text-left ${page === "login" ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}>Login</button>
              <button onClick={() => navigate("/signup")} className={`px-3 py-2 rounded text-left ${page === "signup" ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}>Signup</button>
            </>
          );
        }
        return null;
      })()}
    </aside>
  );
}

function AppLayout() {
  return (
    <>
    <AuthProvider>
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App;
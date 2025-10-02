import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      navigate('/login'); // 🔐 Redirect to login if not logged in
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null; // While loading or redirecting

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Welcome, {user.name} 👋</h2>

      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio || 'Not provided'}</p>

      <p className="mt-4">
        <strong>Skills You Can Teach:</strong><br />
        {user.skillsCanTeach?.length > 0 ? user.skillsCanTeach.join(', ') : 'None listed'}
      </p>

      <p className="mt-2">
        <strong>Skills You Want to Learn:</strong><br />
        {user.skillsWantToLearn?.length > 0 ? user.skillsWantToLearn.join(', ') : 'None listed'}
      </p>

      {/* ✅ Link to Dashboard */}
      <Link
        to="/dashboard"
        className="block mt-6 w-full bg-purple-600 text-white text-center py-2 rounded hover:bg-purple-700"
      >
        View My Matches
      </Link>

      {/* 🔴 Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;

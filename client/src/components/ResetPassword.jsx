// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ResetPassword = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleReset = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       return alert("Passwords do not match!");
//     }

//     try {
//       await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
//         newPassword
//       });

//       alert('✅ Password reset successful! You can now login.');
//       navigate('/login');
//     } catch (err) {
//       console.error('❌ Reset error:', err.response?.data || err.message);
//       alert(err.response?.data?.message || 'Error resetting password.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">Reset Your Password</h2>
//         <form onSubmit={handleReset} className="space-y-4">
//           <input
//             type="password"
//             placeholder="Enter new password"
//             className="w-full p-3 border border-gray-300 rounded outline-purple-400"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm new password"
//             className="w-full p-3 border border-gray-300 rounded outline-purple-400"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const ResetPassword = () => {
//   const { token } = useParams(); // get token from URL
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
//         newPassword,
//       });
//       setMessage(res.data.message);

//       // redirect to login after success
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Failed to reset password.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">Reset Password</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="password"
//             placeholder="Enter new password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded"
//             required
//           />
//           <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
//             Reset Password
//           </button>
//         </form>
//         {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false); // track success
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
        newPassword,
      });
      setMessage(res.data.message);
      setSuccess(true);

      // redirect after 2 sec
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to reset password.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
            Reset Password
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              success ? "text-green-600" : "text-red-600"
            }`}
          >
            {message} {success && "Redirecting to login..."}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;

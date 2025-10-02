// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const [formData, setFormData] = useState({ email: '', password: '' });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post('http://localhost:5000/api/auth/login', formData);

// //       // Save token and user info in localStorage
// //       localStorage.setItem('token', res.data.token);
// //       localStorage.setItem('user', JSON.stringify(res.data.user));

// //       alert('Login successful!');
// //       navigate('/profile');
// //     } catch (err) {
// //       console.error('Login Error:', err.response?.data || err.message);
// //       alert(err.response?.data?.message || 'Login error');
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
// //       <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">Login</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //           required
// //         />
// //         <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));
//       alert('Login successful!');
//       navigate('/profile');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Login failed.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Login to SkillBridge</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="w-full p-3 border rounded outline-purple-400"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full p-3 border rounded outline-purple-400"
//             required
//           />
//           <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('✅ Login successful!');
      navigate('/profile');
    } catch (err) {
      alert(err.response?.data?.message || '❌ Login failed.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md transition-all duration-300 ease-in-out transform hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700">Login to SkillBridge</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-medium py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          <Link to="/forgot-password" className="text-purple-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

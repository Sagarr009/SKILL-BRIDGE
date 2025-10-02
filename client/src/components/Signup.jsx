// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     bio: '',
//     skillsCanTeach: '',
//     skillsWantToLearn: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:5000/api/auth/signup', {
//         ...formData,
//         skillsCanTeach: [formData.skillsCanTeach],
//         skillsWantToLearn: [formData.skillsWantToLearn],
//       });

//       alert('Signup successful! Please login.');
//     } catch (err) {
//       alert('Signup failed: ' + err.response?.data?.message || err.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Signup</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border" />
//         <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border" />
//         <textarea name="bio" placeholder="Bio" onChange={handleChange} className="w-full p-2 border" />
//         <input name="skillsCanTeach" placeholder="Skills You Can Teach" onChange={handleChange} className="w-full p-2 border" />
//         <input name="skillsWantToLearn" placeholder="Skills You Want to Learn" onChange={handleChange} className="w-full p-2 border" />
//         <button type="submit" className="bg-blue-500 text-white p-2 w-full">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', bio: '', skillsCanTeach: '', skillsWantToLearn: '',
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://skill-bridge-back.onrender.com/api/auth/signup', {
        ...formData,
        skillsCanTeach: [formData.skillsCanTeach],
        skillsWantToLearn: [formData.skillsWantToLearn],
      });
      alert('Signup successful! Please login.');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input name="name" placeholder="Name" onChange={handleChange} className="p-3 border rounded" required />
            <input name="email" placeholder="Email" onChange={handleChange} className="p-3 border rounded" required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} className="p-3 border rounded col-span-2" required />
            <input name="skillsCanTeach" placeholder="Skills You Can Teach" onChange={handleChange} className="p-3 border rounded" />
            <input name="skillsWantToLearn" placeholder="Skills You Want to Learn" onChange={handleChange} className="p-3 border rounded" />
          </div>
          <textarea name="bio" placeholder="Your Bio" onChange={handleChange} className="w-full p-3 border rounded h-24 resize-none" />
          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

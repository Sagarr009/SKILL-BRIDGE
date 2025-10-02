// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     skillsCanTeach: '',
//     skillsWantToLearn: '',
//     bio: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const dataToSend = {
//   ...formData,
//   skillsCanTeach: formData.skillsCanTeach.split(',').map(s => s.trim()),
//   skillsWantToLearn: formData.skillsWantToLearn.split(',').map(s => s.trim()),
// };


//     try {
//       const response = await axios.post('http://localhost:5000/api/users/register', dataToSend);
//       alert('✅ User Registered Successfully!');
//       console.log('Response:', response.data);
//     } catch (error) {
//       alert('❌ Error Registering User');
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded space-y-4 max-w-xl mx-auto">
//       <h2 className="text-2xl font-bold text-center text-purple-700">Register</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         onChange={handleChange}
//         className="w-full p-2 border rounded"
//         required
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Your Email"
//         onChange={handleChange}
//         className="w-full p-2 border rounded"
//         required
//       />

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//         className="w-full p-2 border rounded"
//         required
//       />

//       <input
//         type="text"
//         name="skillsCanTeach"
//         placeholder="Skills you can teach (comma separated)"
//         onChange={handleChange}
//         className="w-full p-2 border rounded"
//         required
//       />

//       <input
//         type="text"
//         name="skillsWantToLearn"
//         placeholder="Skills you want to learn (comma separated)"
//         onChange={handleChange}
//         className="w-full p-2 border rounded"
//         required
//       />

//       <textarea
//         name="bio"
//         placeholder="Short Bio"
//         onChange={handleChange}
//         className="w-full p-2 border rounded"
//         required
//       />

//       <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const MatchFinder = () => {
//   const [skill, setSkill] = useState('');
//   const [matches, setMatches] = useState([]);

//   const handleSearch = async () => {
//     if (!skill.trim()) {
//       alert('Please enter a skill to search!');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/match', {
//         skill: skill.trim(),
//       });
//       setMatches(response.data);
//     } catch (error) {
//       console.error('❌ Error finding matches:', error.response?.data || error.message);
//       alert('Error searching for matches. Please try again.');
//     }
//   };

//   const sendRequest = async (toUserId) => {
//     const fromUser = JSON.parse(localStorage.getItem('user')); // ✅ FIXED LINE
//     const fromUserId = fromUser?._id;

//     if (!fromUserId) {
//       alert('You must be logged in to send a request.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/match/send-request', {
//         fromUserId,
//         toUserId,
//         skill: skill.trim(),
//       });
//       alert('✅ Request sent successfully!');
//     } catch (err) {
//       console.error('❌ Request error:', err.response?.data || err.message);
//       alert('Failed to send request.');
//     }
//   };

//   return (
//     <div className="bg-white shadow p-6 rounded max-w-xl mx-auto mt-10 space-y-4">
//       <h2 className="text-2xl font-bold text-center text-green-700">Find Skill Matches</h2>

//       <input
//         type="text"
//         value={skill}
//         onChange={(e) => setSkill(e.target.value)}
//         placeholder="Enter a skill (e.g., JavaScript)"
//         className="w-full p-2 border rounded"
//       />

//       <button
//         onClick={handleSearch}
//         className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
//       >
//         Search
//       </button>

//       {matches.length > 0 ? (
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Matching Users:</h3>
//           <ul className="space-y-2">
//             {matches.map((user) => (
//               <li key={user._id} className="border p-2 rounded bg-gray-100">
//                 <p><strong>Name:</strong> {user.name}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>Can Teach:</strong> {user.skillsCanTeach.join(', ')}</p>
//                 <p><strong>Wants to Learn:</strong> {user.skillsWantToLearn.join(', ')}</p>
//                 <p><strong>Bio:</strong> {user.bio}</p>
//                 <button
//                   onClick={() => sendRequest(user._id)}
//                   className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//                 >
//                   Send Request
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No matches found yet.</p>
//       )}
//     </div>
//   );
// };

// export default MatchFinder;


import React, { useState } from 'react';
import axios from 'axios';

const MatchFinder = () => {
  const [skill, setSkill] = useState('');
  const [matches, setMatches] = useState([]);

  const handleSearch = async () => {
    if (!skill.trim()) return alert('Please enter a skill');
    try {
      const res = await axios.post('http://localhost:5000/api/users/match', { skill: skill.trim() });
      setMatches(res.data);
    } catch (err) {
      alert('Error finding matches');
    }
  };

  const sendRequest = async (toUserId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const fromUserId = user?._id;
    if (!fromUserId) return alert('You must be logged in');
    try {
      await axios.post('http://localhost:5000/api/match/send-request', {
        fromUserId, toUserId, skill: skill.trim(),
      });
      alert('Request sent!');
    } catch (err) {
      alert('Failed to send request');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-10 rounded shadow">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Find Your Skill Match</h2>
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Search by skill..."
          className="flex-grow p-3 border rounded"
        />
        <button onClick={handleSearch} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Search
        </button>
      </div>

      {matches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map(user => (
            <div key={user._id} className="p-4 border rounded shadow bg-gray-50">
              <h3 className="text-lg font-bold text-purple-700">{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Can Teach:</strong> {user.skillsCanTeach.join(', ')}</p>
              <p><strong>Wants to Learn:</strong> {user.skillsWantToLearn.join(', ')}</p>
              <p><strong>Bio:</strong> {user.bio}</p>
              <button
                onClick={() => sendRequest(user._id)}
                className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Send Match Request
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No matches found yet.</p>
      )}
    </div>
  );
};

export default MatchFinder;

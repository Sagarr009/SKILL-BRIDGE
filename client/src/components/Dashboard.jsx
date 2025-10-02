// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Dashboard() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const userId = user?._id;

//   const [sentRequests, setSentRequests] = useState([]);
//   const [receivedRequests, setReceivedRequests] = useState([]);

//   useEffect(() => {
//     if (!userId) return;

//     console.log("📌 Logged-in userId:", userId);

//     // Fetch sent requests
//     axios.get(`http://localhost:5000/api/match/sent/${userId}`)
//       .then(res => {
//         setSentRequests(res.data);
//         console.log("📤 Sent Requests:", res.data);
//       })
//       .catch(err => console.error('❌ Error fetching sent requests:', err));

//     // Fetch received requests
//     axios.get(`http://localhost:5000/api/match/received/${userId}`)
//       .then(res => {
//         setReceivedRequests(res.data);
//         console.log("📥 Received Requests:", res.data);
//       })
//       .catch(err => console.error('❌ Error fetching received requests:', err));
//   }, [userId]);

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6 text-purple-700">Dashboard</h2>

//       {/* ✅ SENT REQUESTS */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-2 text-green-700">Sent Requests</h3>
//         {sentRequests.length === 0 ? (
//           <p>No match requests sent.</p>
//         ) : (
//           <ul className="list-disc list-inside">
//             {sentRequests.map(req => (
//               <li key={req._id}>
//                 To: {req.toUser?.name || 'N/A'} ({req.toUser?.email || 'N/A'}) — 
//                 Skill: {req.skill} — Status: <span className="font-medium">{req.status}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* ✅ RECEIVED REQUESTS */}
//       <div>
//         <h3 className="text-xl font-semibold mb-2 text-blue-700">Received Requests</h3>
//         {receivedRequests.length === 0 ? (
//           <p>No match requests received.</p>
//         ) : (
//           <ul className="list-disc list-inside">
//             {receivedRequests.map(req => (
//               <li key={req._id}>
//                 From: {req.fromUser?.name || 'N/A'} ({req.fromUser?.email || 'N/A'}) — 
//                 Skill: {req.skill} — Status: <span className="font-medium">{req.status}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Dashboard() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const userId = user?._id;

//   const [sentRequests, setSentRequests] = useState([]);
//   const [receivedRequests, setReceivedRequests] = useState([]);

//   useEffect(() => {
//     if (!userId) return;

//     const fetchRequests = async () => {
//       try {
//         const sent = await axios.get(`http://localhost:5000/api/match/sent/${userId}`);
//         const received = await axios.get(`http://localhost:5000/api/match/received/${userId}`);
//         setSentRequests(sent.data);
//         setReceivedRequests(received.data);
//       } catch (err) {
//         console.error('❌ Error fetching requests:', err);
//       }
//     };

//     fetchRequests();
//   }, [userId]);

//   // ✅ Accept or Reject Request
//   const respondToRequest = async (requestId, action) => {
//     try {
//       await axios.put(`http://localhost:5000/api/match/respond/${requestId}`, {
//         status: action,
//       });
//       alert(`Request ${action}ed successfully!`);

//       // Refresh only received requests
//       const updated = await axios.get(`http://localhost:5000/api/match/received/${userId}`);
//       setReceivedRequests(updated.data);
//     } catch (err) {
//       console.error(`❌ Failed to ${action} request:`, err);
//       alert(`Error: Could not ${action} request.`);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6 text-purple-700">Dashboard</h2>

//       {/* ✅ SENT REQUESTS */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-2 text-green-700">Sent Requests</h3>
//         {sentRequests.length === 0 ? (
//           <p>No match requests sent.</p>
//         ) : (
//           <ul className="list-disc list-inside space-y-2">
//             {sentRequests.map((req) => (
//               <li key={req._id}>
//                 To: {req.toUser?.name || 'Unknown'} ({req.toUser?.email || 'N/A'}) — 
//                 Skill: {req.skill} — 
//                 Status: <span className="capitalize font-medium">{req.status}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* ✅ RECEIVED REQUESTS */}
//       <div>
//         <h3 className="text-xl font-semibold mb-2 text-blue-700">Received Requests</h3>
//         {receivedRequests.length === 0 ? (
//           <p>No match requests received.</p>
//         ) : (
//           <ul className="list-disc list-inside space-y-4">
//             {receivedRequests.map((req) => (
//               <li key={req._id}>
//                 From: {req.fromUser?.name || 'Unknown'} ({req.fromUser?.email || 'N/A'}) — 
//                 Skill: {req.skill} — 
//                 Status: <span className="capitalize font-medium">{req.status}</span>

//                 {req.status === 'pending' && (
//                   <div className="flex space-x-3 mt-2">
//                     <button
//                       className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
//                       onClick={() => respondToRequest(req._id, 'accepted')}
//                     >
//                       Accept
//                     </button>
//                     <button
//                       className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                       onClick={() => respondToRequest(req._id, 'rejected')}
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?._id;

  const [sentRequests, setSentRequests] = useState([]);
  const [receivedRequests, setReceivedRequests] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const fetchRequests = async () => {
      try {
        const sent = await axios.get(`https://skill-bridge-back.onrender.com/api/match/sent/${userId}`);
        const received = await axios.get(`https://skill-bridge-back.onrender.com/api/match/received/${userId}`);
        setSentRequests(sent.data);
        setReceivedRequests(received.data);
      } catch (err) {
        console.error('❌ Error fetching requests:', err);
      }
    };

    fetchRequests();
  }, [userId]);

  const respondToRequest = async (requestId, action) => {
    try {
      await axios.put(`https://skill-bridge-back.onrender.com/api/match/respond/${requestId}`, {
        status: action,
      });
      alert(`Request ${action}ed successfully!`);

      const updated = await axios.get(`https://skill-bridge-back.onrender.com/api/match/received/${userId}`);
      setReceivedRequests(updated.data);
    } catch (err) {
      console.error(`❌ Failed to ${action} request:`, err);
      alert(`Error: Could not ${action} request.`);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-10">📋 Dashboard</h2>

      {/* SENT REQUESTS */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">✅ Sent Requests</h3>
        {sentRequests.length === 0 ? (
          <p className="text-gray-500">No match requests sent.</p>
        ) : (
          <div className="space-y-4">
            {sentRequests.map((req) => (
              <div key={req._id} className="bg-white p-4 rounded shadow-md border-l-4 border-green-500">
                <p><strong>To:</strong> {req.toUser?.name || 'Unknown'} ({req.toUser?.email || 'N/A'})</p>
                <p><strong>Skill:</strong> {req.skill}</p>
                <p><strong>Status:</strong> <span className="capitalize font-medium text-gray-800">{req.status}</span></p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RECEIVED REQUESTS */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">📥 Received Requests</h3>
        {receivedRequests.length === 0 ? (
          <p className="text-gray-500">No match requests received.</p>
        ) : (
          <div className="space-y-4">
            {receivedRequests.map((req) => (
              <div key={req._id} className="bg-white p-4 rounded shadow-md border-l-4 border-blue-500">
                <p><strong>From:</strong> {req.fromUser?.name || 'Unknown'} ({req.fromUser?.email || 'N/A'})</p>
                <p><strong>Skill:</strong> {req.skill}</p>
                <p><strong>Status:</strong> <span className="capitalize font-medium text-gray-800">{req.status}</span></p>

                {req.status === 'pending' && (
                  <div className="mt-3 flex gap-3">
                    <button
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
                      onClick={() => respondToRequest(req._id, 'accepted')}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
                      onClick={() => respondToRequest(req._id, 'rejected')}
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

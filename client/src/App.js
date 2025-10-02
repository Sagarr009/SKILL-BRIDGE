

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import MatchFinder from './components/MatchFinder';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <nav className="bg-white shadow p-4 flex justify-center gap-6 text-purple-700 font-semibold">
//         <Link to="/signup">Signup</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/matchfinder">MatchFinder</Link>
//         <Link to="/profile">Profile</Link>
//         <Link to="/dashboard">Dashboard</Link>
//       </nav>

//       <Routes>
//         {/* ✅ Signup is now the landing page */}
//         <Route path="/" element={<Signup />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/matchfinder" element={<MatchFinder />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import MatchFinder from './components/MatchFinder';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Dashboard from './components/Dashboard';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';

// function App() {
//   return (
//     <Router>
//       {/* 🌐 NAVBAR */}
//       <nav className="bg-purple-700 text-white p-4 shadow-md">
//         <div className="max-w-6xl mx-auto flex justify-between items-center">
//           <h1 className="text-xl font-bold tracking-wide">SkillBridge</h1>
//           <div className="space-x-6">
//             <Link to="/signup" className="hover:text-purple-200">Signup</Link>
//             <Link to="/login" className="hover:text-purple-200">Login</Link>
//             <Link to="/matchfinder" className="hover:text-purple-200">MatchFinder</Link>
//             <Link to="/profile" className="hover:text-purple-200">Profile</Link>
//             <Link to="/dashboard" className="hover:text-purple-200">Dashboard</Link>
//           </div>
//         </div>
//       </nav>

//       {/* 🌐 ROUTES */}
//       <main className="min-h-screen bg-gray-100 p-6">
//         <Routes>
//           <Route path="/" element={<Signup />} /> {/* ✅ Landing page */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
//           <Route path="/matchfinder" element={<MatchFinder />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// import MatchFinder from './components/MatchFinder';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Dashboard from './components/Dashboard';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';

// function App() {
//   return (
//     <Router>
//       {/* 🌐 NAVBAR */}
//       <nav className="bg-purple-700 text-white p-4 shadow-md">
//         <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
//           <h1 className="text-2xl font-bold mb-2 sm:mb-0">SkillBridge</h1>
//           <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
//             <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-yellow-300' : 'hover:text-purple-200'}>
//               Signup
//             </NavLink>
//             <NavLink to="/login" className={({ isActive }) => isActive ? 'text-yellow-300' : 'hover:text-purple-200'}>
//               Login
//             </NavLink>
//             <NavLink to="/matchfinder" className={({ isActive }) => isActive ? 'text-yellow-300' : 'hover:text-purple-200'}>
//               MatchFinder
//             </NavLink>
//             <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-yellow-300' : 'hover:text-purple-200'}>
//               Profile
//             </NavLink>
//             <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-yellow-300' : 'hover:text-purple-200'}>
//               Dashboard
//             </NavLink>
//           </div>
//         </div>
//       </nav>

//       {/* 🌐 ROUTES */}
//       <main className="min-h-screen bg-gray-100 p-6">
//         <Routes>
//           <Route path="/" element={<Signup />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
//           <Route path="/matchfinder" element={<MatchFinder />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// import MatchFinder from './components/MatchFinder';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Dashboard from './components/Dashboard';
// // import ForgotPassword from './components/ForgotPassword';
// // import ResetPassword from './components/ResetPassword';


// function App() {
//   return (
//     <Router>
//       {/* 🌐 NAVBAR */}
//       <nav className="bg-purple-700 text-white px-4 py-3 shadow-md">
//         <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
//           <h1 className="text-2xl font-bold tracking-wider mb-2 sm:mb-0">SkillBridge</h1>
//           <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
//             <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-yellow-300 font-medium' : 'hover:text-purple-200'}>
//               Signup
//             </NavLink>
//             <NavLink to="/login" className={({ isActive }) => isActive ? 'text-yellow-300 font-medium' : 'hover:text-purple-200'}>
//               Login
//             </NavLink>
//             <NavLink to="/matchfinder" className={({ isActive }) => isActive ? 'text-yellow-300 font-medium' : 'hover:text-purple-200'}>
//               MatchFinder
//             </NavLink>
//             <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-yellow-300 font-medium' : 'hover:text-purple-200'}>
//               Profile
//             </NavLink>
//             <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-yellow-300 font-medium' : 'hover:text-purple-200'}>
//               Dashboard
//             </NavLink>
//           </div>
//         </div>
//       </nav>

//       {/* 🌐 ROUTES */}
//       <main className="min-h-screen bg-gray-100 p-6">
//         <Routes>
//           <Route path="/" element={<Signup />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           {/* <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
//           <Route path="/matchfinder" element={<MatchFinder />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import MatchFinder from "./components/MatchFinder";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <Router>
      {/* 🌐 NAVBAR */}
      <nav className="bg-purple-700 text-white px-4 py-3 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider mb-2 sm:mb-0">
            SkillBridge
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-medium"
                  : "hover:text-purple-200"
              }
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-medium"
                  : "hover:text-purple-200"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/matchfinder"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-medium"
                  : "hover:text-purple-200"
              }
            >
              MatchFinder
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-medium"
                  : "hover:text-purple-200"
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-medium"
                  : "hover:text-purple-200"
              }
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      </nav>

      {/* 🌐 ROUTES */}
      <main className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/matchfinder" element={<MatchFinder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;


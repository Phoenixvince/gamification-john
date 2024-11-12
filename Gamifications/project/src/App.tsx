import React from 'react';
import UserProfile from './components/UserProfile';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <UserProfile />
        <Leaderboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
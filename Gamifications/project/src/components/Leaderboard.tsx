import React from 'react';
import { Trophy, Medal, Crown } from 'lucide-react';

const Leaderboard = () => {
  const leaders = [
    { rank: 1, name: 'Sarah Chen', points: 24680, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
    { rank: 2, name: 'John Muchiri', points: 23450, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80' },
    { rank: 3, name: 'Alex Kim', points: 22890, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80' },
    { rank: 4, name: 'Maya Patel', points: 21780, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
    { rank: 5, name: 'Tom Wilson', points: 20450, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="text-yellow-400" size={24} />;
      case 2:
        return <Medal className="text-gray-400" size={24} />;
      case 3:
        return <Medal className="text-amber-700" size={24} />;
      default:
        return <Trophy className="text-purple-400" size={24} />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 rounded-2xl shadow-2xl mt-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Trophy className="text-yellow-400" size={28} />
        Global Leaderboard
      </h2>

      <div className="space-y-4">
        {leaders.map((leader) => (
          <div
            key={leader.rank}
            className="bg-purple-800/30 p-4 rounded-xl flex items-center gap-4 transform hover:scale-102 transition-transform"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-800/50">
              {getRankIcon(leader.rank)}
            </div>
            
            <img
              src={leader.avatar}
              alt={leader.name}
              className="w-12 h-12 rounded-full border-2 border-purple-400"
            />
            
            <div className="flex-grow">
              <h3 className="text-white font-semibold">{leader.name}</h3>
              <p className="text-purple-300 text-sm">Level {Math.floor(leader.points / 1000)}</p>
            </div>
            
            <div className="text-right">
              <div className="text-white font-bold">{leader.points.toLocaleString()}</div>
              <div className="text-purple-300 text-sm">points</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
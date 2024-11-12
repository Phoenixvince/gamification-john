import React from 'react';
import { Trophy, Star, Zap, Award, Target, Rocket, Crown } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 rounded-2xl shadow-2xl">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-purple-400 shadow-lg mx-auto"
            />
            <div className="absolute -bottom-2 right-1/3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <Crown size={14} /> PRO
            </div>
          </div>
          
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-white">John Muchiri</h2>
            <p className="text-purple-300">Level 42 Explorer</p>
            
            <div className="mt-4 bg-purple-800/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-300">XP Progress</span>
                <span className="text-purple-300">8,420 / 10,000</span>
              </div>
              <div className="w-full bg-purple-950 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '84.2%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-800/30 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-yellow-400" size={24} />
                <h3 className="text-xl font-bold text-white">Achievements</h3>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Star, title: 'First Victory', desc: 'Won first challenge', color: 'text-yellow-400' },
                  { icon: Zap, title: 'Speed Demon', desc: '5 quick solutions', color: 'text-blue-400' },
                  { icon: Target, title: 'Sharpshooter', desc: '100% accuracy', color: 'text-green-400' },
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 bg-purple-800/20 p-3 rounded-lg">
                    <achievement.icon className={achievement.color} size={20} />
                    <div>
                      <div className="text-white font-medium">{achievement.title}</div>
                      <div className="text-purple-300 text-sm">{achievement.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-800/30 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">Stats</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Total Points', value: '12,450', color: 'from-purple-400 to-pink-500' },
                  { label: 'Challenges Won', value: '47', color: 'from-blue-400 to-cyan-500' },
                  { label: 'Weekly Rank', value: '#3', color: 'from-yellow-400 to-orange-500' },
                ].map((stat, index) => (
                  <div key={index} className="bg-purple-800/20 p-3 rounded-lg">
                    <div className="text-purple-300 text-sm mb-1">{stat.label}</div>
                    <div className={`text-xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
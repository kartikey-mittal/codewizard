import React from 'react';
import { Trophy, Award, Medal, Gift } from 'lucide-react';

const prizes = [
  {
    place: '1st Place',
    amount: '₹25,000',
    icon: <Trophy className="w-12 h-12 text-yellow-400" />,
    description: 'Grand prize package including cash and sponsored products',
    gradient: 'from-yellow-400 via-yellow-300 to-yellow-400'
  },
  {
    place: '2nd Place',
    amount: '₹15,000',
    icon: <Award className="w-12 h-12 text-gray-300" />,
    description: 'Runner-up prize package with exclusive opportunities',
    gradient: 'from-gray-300 via-gray-200 to-gray-300'
  },
  {
    place: '3rd Place',
    amount: '₹10,000',
    icon: <Medal className="w-12 h-12 text-amber-600" />,
    description: 'Bronze prize package with valuable rewards',
    gradient: 'from-amber-600 via-amber-500 to-amber-600'
  },
  {
    place: 'And More',
    amount: 'Special Awards',
    icon: <Gift className="w-12 h-12 text-purple-400" />,
    description: 'Category-specific prizes for innovation, design, and impact',
    gradient: 'from-purple-400 via-purple-300 to-purple-400'
  }
];

export function PrizePool() {
  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Prize Pool</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compete for a chance to win amazing prizes and recognition for your innovative solutions
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* First row with 1st Place */}
          <div className="w-full max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ background: `linear-gradient(to right, ${prizes[0].gradient})` }}
              />
              <div className="relative bg-[#18181b] border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105" style={{border:"0.5px solid #2d2d2f"}}>
                <div className="flex justify-center mb-4">
                  {prizes[0].icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{prizes[0].place}</h3>
                <div className={`text-3xl font-bold mb-4 text-center bg-gradient-to-r ${prizes[0].gradient} bg-clip-text text-transparent`}>
                  {prizes[0].amount}
                </div>
                <p className="text-gray-400 text-center text-sm">
                  {prizes[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Second row with 2nd Place and 3rd Place */}
          <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-screen-md mx-auto">
            {prizes.slice(1, 3).map((prize, index) => (
              <div key={index} className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ background: `linear-gradient(to right, ${prize.gradient})` }}
                  />
                  <div className="relative bg-[#18181b] border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105" style={{border:"0.5px solid #2d2d2f"}}>
                    <div className="flex justify-center mb-4">
                      {prize.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">{prize.place}</h3>
                    <div className={`text-3xl font-bold mb-4 text-center bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                      {prize.amount}
                    </div>
                    <p className="text-gray-400 text-center text-sm">
                      {prize.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third row with And More */}
          <div className="w-full max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ background: `linear-gradient(to right, ${prizes[3].gradient})` }}
              />
              <div className="relative bg-[#18181b] border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105" style={{border:"0.5px solid #2d2d2f"}}>
                <div className="flex justify-center mb-4">
                  {prizes[3].icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{prizes[3].place}</h3>
                <div className={`text-3xl font-bold mb-4 text-center bg-gradient-to-r ${prizes[3].gradient} bg-clip-text text-transparent`}>
                  {prizes[3].amount}
                </div>
                <p className="text-gray-400 text-center text-sm">
                  {prizes[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
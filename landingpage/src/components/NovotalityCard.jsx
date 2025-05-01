import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip,CartesianGrid, ResponsiveContainer } from 'recharts';
import { FiChevronDown } from 'react-icons/fi';

const NoVolatilityCard = () => {
  // Data matching the image's growth curve
  const data = [
    { name: 'Jan', value: 1200000 },
    { name: 'Feb', value: 1450000 },
    { name: 'Mar', value: 1320000 },
    { name: 'Apr', value: 1620000 },
    { name: 'May', value: 1780000 },
    { name: 'Jun', value: 1876580 },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-[#E9F3F4]  rounded-2xl p-10 rounded-lg  mx-auto max-w-[1200px] px-10">
      {/* Left Side */}
      <div className="relative top-20 md:w-1/2 mb-6 px-20 flex flex-col mx-auto ">
        <h2 className="  text-2xl font-sans text-4xl text-gray-1000 mb-2">No asset volatility</h2>
        <p className="text-gray-600 text-sm">Generate returns on your cash <br /> reserves without making <br /> any investments.</p>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 bg-white p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-gray-500 text-sm">Summary</p>
            <h3 className="text-2xl font-bold">$1,876,580</h3>
          </div>
          <div className="text-sm text-gray-500">6 Months</div>
        </div>

        {/* Simple SVG Chart */}
        <div className="w-full h-40 mt-4 relative">
          <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 90 L 50 60 L 100 50 L 150 45 L 200 30 L 250 20 L 300 10"
              fill="none"
              stroke="#14b8a6"
              strokeWidth="2"
            />
            <path
              d="M 0 90 L 50 60 L 100 50 L 150 45 L 200 30 L 250 20 L 300 10 L 300 100 L 0 100 Z"
              fill="url(#fillGradient)"
            />
          </svg>

          {/* Month Labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>
    </div>
);

};

export default NoVolatilityCard;
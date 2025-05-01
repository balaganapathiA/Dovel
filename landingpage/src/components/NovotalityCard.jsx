import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiChevronDown } from 'react-icons/fi';

export default function NoVolatilityCard() {
  // Sample data - replace with your actual data
  const data = [
    { name: 'Jan', value: 0 },
    { name: 'Jan', value: 1200000 },
    { name: 'Feb', value: 1500000 },
    { name: 'Mar', value: 1300000 },
    { name: 'Apr', value: 1600000 },
    { name: 'May', value: 1700000 },
    { name: 'Jun', value: 1876580 },
  ];

  return (
    <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 mx-auto max-w-[1200px] px-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Summary</h2>
          <p className="text-2xl font-bold mt-1">$1,876,580</p>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span>6 Months</span>
          <FiChevronDown className="ml-1" size={14} />
        </div>
      </div>

      {/* Line Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip 
              formatter={(value) => [`$${value.toLocaleString()}`, "Amount"]}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <defs>
              <filter id="line-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="3" dy="3" stdDeviation="3" floodColor="#4f46e5" />
              </filter>
            </defs>
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={2}
              filter="url(#line-shadow)"  
              activeDot={{ r: 6, stroke: '#4f46e5', strokeWidth: 2 }}
              dot={false}  
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const TokenomicsChart = () => {
  const data = [
    { name: 'Ladies Fund (Liquidity)', value: 40 },
    { name: 'Treat Treasury (Marketing)', value: 20 },
    { name: 'Dating Pool (Development)', value: 20 },
    { name: 'Dog Park (Community)', value: 20 },
  ];

  const COLORS = ['#EC4899', '#BE185D', '#831843', '#500724'];

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TokenomicsChart;
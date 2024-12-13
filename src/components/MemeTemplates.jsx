import React from 'react';

const MemeTemplates = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* What Girls Think / What I Am Meme */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
        <svg className="w-full" viewBox="0 0 400 300">
          <rect width="400" height="300" fill="#1F2937" rx="10" />
          
          {/* Left Panel */}
          <g transform="translate(20, 20)">
            <rect width="160" height="260" fill="#374151" rx="8" />
            <text x="80" y="30" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
              What Girls Think
            </text>
            <circle cx="80" cy="120" r="50" fill="#EC4899" opacity="0.5" />
            <text x="80" y="200" textAnchor="middle" fill="white" fontSize="14">
              Innocent Puppy
            </text>
          </g>
          
          {/* Right Panel */}
          <g transform="translate(220, 20)">
            <rect width="160" height="260" fill="#374151" rx="8" />
            <text x="80" y="30" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
              What I Am
            </text>
            <circle cx="80" cy="120" r="50" fill="#EC4899" opacity="0.8" />
            <path d="M60,110 Q80,130 100,110" stroke="white" fill="none" strokeWidth="2" />
            <text x="80" y="200" textAnchor="middle" fill="white" fontSize="14">
              CHAD Doge
            </text>
          </g>
        </svg>
      </div>
      
      {/* To The Moon Meme */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
        <svg className="w-full" viewBox="0 0 400 300">
          <rect width="400" height="300" fill="#1F2937" rx="10" />
          
          {/* Moon */}
          <circle cx="320" cy="60" r="30" fill="#FDE68A" />
          
          {/* Rocket */}
          <g transform="translate(100, 150) rotate(-45)">
            <path d="M0,0 L30,60 L-30,60 Z" fill="#EC4899" />
            <rect x="-15" y="60" width="30" height="40" fill="#EC4899" />
            <path d="M-15,100 L0,120 L15,100 Z" fill="#BE185D" />
          </g>
          
          {/* Text */}
          <text x="200" y="250" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
            $CLIFF TO THE MOON
          </text>
        </svg>
      </div>
    </div>
  );
};

export default MemeTemplates;
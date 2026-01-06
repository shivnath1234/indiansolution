import React from 'react';

export const MoradoLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="morado-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333ea" /> {/* Purple-600 */}
        <stop offset="100%" stopColor="#3b82f6" /> {/* Blue-500 */}
      </linearGradient>
    </defs>
    <path 
      d="M8 8a2 2 0 0 1 2-2h4l6 6 6-6h4a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h-4V20L20 26L14 20v14H10a2 2 0 0 1-2-2V8z" 
      fill="url(#morado-gradient)" 
    />
  </svg>
);
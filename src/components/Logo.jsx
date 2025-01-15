import React from 'react';
import logoImage from '../assets/blogger.png';  

function Logo({ width = '100px', height = '40px' }) {
  return (
    <div style={{ width, height }}>
      <img 
        src={logoImage} 
        alt="Logo" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }} 
      />
    </div>
  );
}

export default Logo;

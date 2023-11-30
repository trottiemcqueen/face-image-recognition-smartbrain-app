import React from 'react';
import Tilt from 'react-parallax-tilt';
import brainy3 from './brainy3.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ width : 300, height : 175 }}>
          <div className="Tilt-inner pa3">
            <img style={{paddingTop : '2px'}} alt='logo' src={brainy3}/>
          </div>
      </Tilt>
    </div>
  );
};

export default Logo;
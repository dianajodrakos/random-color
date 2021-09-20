import React from 'react';
import PropTypes from 'prop-types';
import style from './display.css';
const Display = ({ color1, color2, color3 }) => {
  return <div 
    role="main"
    className={style.randomColor} 
    style={
      { 
        background: color1,
        color: color2,
        borderColor: color3,
      }
    }>
    <p>HELLO</p>
    <p>WORLD</p>
  </div>;
};

Display.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string.isRequired,
};

export default Display;

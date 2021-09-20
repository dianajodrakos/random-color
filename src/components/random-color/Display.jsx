import React from 'react';
import PropTypes from 'prop-types';
import style from './display.css';
const Display = ({ color }) => {
  return <div 
    className={style.randomColor} 
    style={{ background: color }}>&nbsp;</div>;
};

Display.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Display;

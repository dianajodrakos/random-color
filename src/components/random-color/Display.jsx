import React from 'react';
import PropTypes from 'prop-types';
import style from './display.css';

const Display = ({ color1, color2, color3, color4, color5, countdown }) => {
  if(countdown === 'DONE')
    return (
      <div
        role="main"
        id="main"
        className={style.randomColor}
        style={{
          background: color1,
          color: color2,
          borderColor: color4,
        }}
      >
        <p className={style.donetext}>
          &nbsp; &nbsp; &nbsp;&lt;3 &lt;3 &lt;3 &lt;3 &lt;3
          <span style={{ color: color3 }}>YOU&apos;RE DONE </span> &lt;3 &lt;3
          <span style={{ color: color5 }}> GO REST </span> &lt;3 &lt;3 &lt;3
          &lt;3 &lt;3
        </p>
      </div>
    );

  return (
    <div
      role="main"
      id="main"
      className={style.randomColor}
      style={{
        background: color1,
        color: color2,
        borderColor: color4,
      }}
    >
      <p className={style.text}>YOU HAVE</p>
      <p className={style.count} style={{ color: color3 }}>
        {countdown}
      </p>
      <p className={style.text}>DAYS UNTIL THIS BACKEND SHITSHOW IS OVER</p>
    </div>
  );
};

Display.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string.isRequired,
  color4: PropTypes.string.isRequired,
  color5: PropTypes.string.isRequired,
  countdown: PropTypes.string.isRequired,
};

export default Display;

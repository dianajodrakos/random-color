import React from 'react';
import PropTypes from 'prop-types';
import style from './display.css';

const Display = ({ color, countdown }) => {
  const [color1, color2, color3, color4, color5] = color;
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
      <p className={style.text}>DAYS UNTIL THIS IS OVER</p>
    </div>
  );
};

Display.propTypes = {
  color: PropTypes.array.isRequired,
  countdown: PropTypes.string.isRequired,
};

export default Display;

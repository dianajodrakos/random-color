import { useState, useEffect } from 'react';
import { randomColor } from 'randomcolor';
import { timer } from '../utils/timer.js';

export const useColorChange = () => {
  const [color, setColor] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
  ]);
  const [countdown, setCountdown] = useState(timer());

  const changeDisplay = () => {
    const newColor = randomColor();
    setColor((color) => [newColor, ...color]);
    setCountdown(timer());
  };

  useEffect(() => {
    setInterval(() => {
      changeDisplay();
    }, 1000);
  }, []);

  return {
    color,
    countdown
  };
};

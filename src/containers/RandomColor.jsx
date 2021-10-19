/* eslint-disable max-len */
import React from 'react';
import Display from '../components/random-color/Display';
import { useColorChange } from '../hooks/useColorChange.js';

export default function RandomColor() {
  const { color, countdown } = useColorChange();

  return (
    <div>
      <Display color={color} countdown={countdown} />
    </div>
  );
}

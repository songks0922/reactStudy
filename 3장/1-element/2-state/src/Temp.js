import React, { useState } from 'react';

export default function Temp() {
  const [color, setColor] = useState('red');
  function onClick() {
    setColor('blue');
  }
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      좋아요
    </button>
  );
}

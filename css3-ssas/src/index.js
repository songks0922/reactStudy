import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import Box from './Box';

ReactDOM.render(
  <div>
    <Button size="big" />
    <Button size="small" />
    <Box size="big" />
    <Box size="small" />
  </div>,
  document.getElementById('root'),
);

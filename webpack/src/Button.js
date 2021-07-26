import React from 'react';

export default function Button(props) {
  return React.cloneElement('button', null, props.label);
}
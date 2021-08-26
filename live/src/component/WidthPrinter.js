import React from 'react';
import useWindowWidth from '../customHook/useWindowWidth';

export default function WidthPrinter() {
  const width = useWindowWidth();
  return <div>{`width is ${width}`}</div>;
}

import React from 'react';
import * as style from './SimpleStyle';

function Box({ size }) {
  const isBig = size === 'big';
  const label = isBig ? '큰 박스' : '작은 박스';
  return <style.BoxCommon isBig={isBig}>{label}</style.BoxCommon>;
}

export default function Simple() {
  return (
    <div className={'mainDiv'}>
      <h1>Simple</h1>
      <style.BoxDiv>기본박스</style.BoxDiv>
      <style.BoxBig>큰박스</style.BoxBig>
      <Box size={'big'} />
      <div></div>
    </div>
  );
}

React.createElement(
  'div',
  { className: 'mainDiv' },
  React.createElement('h1', null, 'createElement Simple'),
);

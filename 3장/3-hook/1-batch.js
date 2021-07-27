import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  function onClick() {
    /*
    count 값이 2 증가 하는 것을 의도 했으나 의도대로 되지 않음
    -> 상태값 변경함수는 비동기면서 배치(batch)로 처리하기 때문인데 이는
    React가 효율적으로 렌더링하기 위해 여러 상태값 변경 요청을 배치로 처리함
    setCount(count + 1);
    setCount(count + 1);
    */
    setCount(v => v + 1);
    setCount(v => v + 1);
    //함수를 입력하면 처리되기 직전의 상태값을 매개변수로 받기 때문에 의도대로 동작함
    //React 외부에서 
  }
  console.log('render called');
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
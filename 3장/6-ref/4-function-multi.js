import React, { useRef } from 'react';

export default function App() {
  const boxListRef = useRef({});

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100%',
        }}
      >
        {BOX_LIST.map((item) => (
          <div
            key={item.id}
            ref={(ref) => (boxListRef.current[item.id] = ref)}
            style={{
              flex: '0 0 auto',
              width: item.width,
              height: 100,
              backgroundColor: 'yellow',
              border: 'solid 1px red',
            }}
          >{`box_${item.id}`}</div>
        ))}
      </div>
      <button onClick={() => {}}>오른쪽 끝 요소는?</button>
    </div>
  );
}

const BOX_LIST = [
  { id: 1, width: 70 },
  { id: 2, width: 100 },
  { id: 3, width: 80 },
  { id: 4, width: 100 },
  { id: 5, width: 90 },
  { id: 6, width: 60 },
  { id: 7, width: 120 },
];

import { useEffect } from 'react';

function Test() {
  useEffect(() => {
    console.log('렌더링');
    return () => {
      console.log('언 마운트');
    };
  }, []);

  return <div></div>;
}

export default Test;

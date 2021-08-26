import React from 'react';

function Title({title}) {
  console.log('%cTitle render', 'color: blue');
  return <p>{title}</p>
}

export default React.memo(Title);
// export default Title;
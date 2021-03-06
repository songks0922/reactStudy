import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

function Profile(_, ref) {
  const [name, setName] = useState('mike');
  const [age, setAge] = useState(0);
  useEffect(() => {
    setName('temp');
  }, []);
  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));
  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      {/* ... */}
    </div>
  );
}

export default forwardRef(Profile);

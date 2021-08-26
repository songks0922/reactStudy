import {useState, useEffect} from "react";
export default function useUser(userId) {
  const [user, setUser] = useState(null);
    useEffect(() => {
      getUserApi(userId).then(data => setUser(data));
    }, [userId]);
    //의존성 배열 : 배열안에 요소가 변경될 때만 부수효과가 실행된다.

  return user;
}

const USER1 = {name: 'mike', age: 23};
const USER2 = {name: 'jane', age: 31};

function getUserApi(userId) {
  return new Promise(res => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}
import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Rooms({ match }) {
  return (
    <div>
      <h2>여기는 방을 소개하는 페이지입니다.</h2>
      <Link to={`${match.url}/blueRoom`}>파란 방입니다.</Link>
      <br />
      <Link to={`${match.url}/greenRoom`}>초록 방입니다.</Link>
      <br />
      <Route path={`${match.url}/:roomId`} component={Room} />
      {/*:은 파라미터로 사용하겠다고 선언한 것*/}
      <Route
        // exact가 있으면 /rooms/ 일 경우에만 랜더링
        exact
        path={match.url}
        render={() => <h3>방을 선택해 주세요..</h3>}
      />
    </div>
  );
}

function Room({ match }) {
  return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
}

// params 라는 객체 안에 파라미터가 모여있다.

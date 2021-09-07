import React, { createContext, useState } from 'react';

const UserContext = createContext('unknown');
const SetUserContext = createContext(() => {});

export default function App() {
  const [user, setUser] = useState({ username: 'mike', helloCount: 0 });
  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}

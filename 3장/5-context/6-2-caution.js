import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext('unknown');

export default function App() {
  return (
    <div>
      <UserContext.Provider value={{ username, age }}></UserContext.Provider>
      <Profile />
    </div>
  );
}

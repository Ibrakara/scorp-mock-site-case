import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userLanguage, setUserLanguage] = useState(null);
  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        setUserPassword,
        userLanguage,
        setUserLanguage,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

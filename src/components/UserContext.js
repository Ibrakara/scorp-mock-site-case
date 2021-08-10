import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userLanguage, setUserLanguage] = useState("");

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

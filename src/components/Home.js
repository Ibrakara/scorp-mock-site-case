import React, { useContext } from "react";
import { LocalizationContext } from "./LanguageContext";

function Home(props) {
  const { langString } = useContext(LocalizationContext);
  return (
    <div>
      <h1>{langString.dummyTitle}</h1>
      <p>{langString.dummyText}</p>
    </div>
  );
}

export default Home;

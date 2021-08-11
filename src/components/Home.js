import React, { useContext } from "react";
import { LocalizationContext } from "./LanguageContext";

function Home(props) {
  const { langString } = useContext(LocalizationContext);
  return (
    <div className="home-container">
      <h1 id="home-heading">{langString.dummyTitle}</h1>
      <p id="home-text">{langString.dummyText}</p>
    </div>
  );
}

export default Home;

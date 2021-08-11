import React, { useContext } from "react";
import { LocalizationContext } from "./LanguageContext";

function Footer(props) {
  const { langString } = useContext(LocalizationContext);

  return (
    <div className="footer-container">
      <h2>{langString.homePageName}</h2>
      <p>by I.K.</p>
    </div>
  );
}

export default Footer;

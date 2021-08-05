import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LocalizationContext } from "./LanguageContext";
import scorpImg from "../styles/images/scorp.png";

function Nav() {
  const { langString, changeLangToEn, changeLangToTr } =
    useContext(LocalizationContext);
  let location = useLocation();
  const [pageLocation, setPageLocation] = useState("/");
  useEffect(() => {
    if (location.pathname === "/") {
      setPageLocation("/");
    } else {
      setPageLocation("contact");
    }
  }, [location]);

  return (
    <nav>
      <img src={scorpImg} alt="" height="80" />
      {pageLocation === "/" ? (
        <h3>{langString.homePageName}</h3>
      ) : (
        <h3>{langString.contactPageName}</h3>
      )}

      <ul>
        <NavLink exact to="/">
          <li>{langString.homeButton}</li>
        </NavLink>
        <NavLink to="/contact">
          <li>{langString.contactButton}</li>
        </NavLink>
        <li>
          <button onClick={changeLangToTr}>Tr</button>
          <button onClick={changeLangToEn}>En</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

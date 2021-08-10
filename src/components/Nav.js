import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LocalizationContext } from "./LanguageContext";
import scorpImg from "../styles/images/scorp.png";
import { UserContext } from "./UserContext";

function Nav(props) {
  const [showDropdow, setShowDropdown] = useState(false);
  const [pageLocation, setPageLocation] = useState("/");
  const { langString, setLangString, langs } = useContext(LocalizationContext);
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    setUserPassword,
    userLanguage,
    setUserLanguage,
  } = useContext(UserContext);
  let location = useLocation();
  const showHideModal = props.modalDisplay;
  useEffect(() => {
    if (location.pathname === "/") {
      setPageLocation("/");
    } else {
      setPageLocation("contact");
    }
  }, [location]);
  const changeDropdownVisibility = () => setShowDropdown(!showDropdow);
  const changeLangToEn = () => {
    setLangString(langs.en);
  };
  const changeLangToTr = () => {
    setLangString(langs.tr);
  };
  const handleLogout = () => {
    setUserName("");
    setUserEmail("");
    setUserPassword("");
    setUserLanguage("");
  };

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
        <li>
          {userName === "" ? (
            <button onClick={showHideModal}>{langString.loginButton}</button>
          ) : (
            <div>
              <button onClick={changeDropdownVisibility}>{userName}</button>
              {showDropdow ? (
                <div className="dropdown">
                  <p>{userEmail}</p>
                  <button onClick={handleLogout}>
                    {langString.logOutButton}
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

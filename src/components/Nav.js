import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LocalizationContext } from "./LanguageContext";
import circle from "../styles/images/circle.png";
import { UserContext } from "./UserContext";
import Hamburger from "./Hamburger";

function Nav(props) {
  const [pageLocation, setPageLocation] = useState("/");
  const { langString, setLangString, langs } = useContext(LocalizationContext);
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    setUserPassword,
    setUserLanguage,
  } = useContext(UserContext);
  let location = useLocation();
  const showHideModal = props.modalDisplay;
  const [isHamburgerOpen, setIsHamburgerOper] = useState(false);
  const toggleHamburgerOpen = () => {
    setIsHamburgerOper(!isHamburgerOpen);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setPageLocation("/");
    } else {
      setPageLocation("contact");
    }
  }, [location]);
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
    <nav className="nav-container">
      <div className="nav-side" id="nav-leftside">
        <img className="nav-image" src={circle} alt="" />
        {pageLocation === "/" ? (
          <h3 className="nav-heading">{langString.homePageName}</h3>
        ) : (
          <h3 className="nav-heading">{langString.contactPageName}</h3>
        )}
      </div>

      <ul className="nav-side" id="nav-rigthside">
        <NavLink exact to={process.env.PUBLIC_URL + "/"}>
          <li>{langString.homeButton}</li>
        </NavLink>
        <NavLink to={process.env.PUBLIC_URL + "/contact"}>
          <li>{langString.contactButton}</li>
        </NavLink>
        <li className="lang-dropdown">
          <button className="lang-dropbtn nav-button">
            {langString.changeLangButton}
          </button>
          <div className="lang-dropdown-content">
            <button
              className="nav-button lang-selector-button"
              onClick={changeLangToTr}
            >
              Tr
            </button>
            <button
              className="nav-button lang-selector-button"
              onClick={changeLangToEn}
            >
              En
            </button>
          </div>
        </li>
        <li>
          {userName === "" ? (
            <button className="nav-button" onClick={showHideModal}>
              {langString.loginButton}
            </button>
          ) : (
            <div className="user-dropdown">
              <button className="user-dropbtn nav-button">{userName}</button>
              <div className="user-dropdown-content">
                <p>{userEmail}</p>
                <button className="nav-button" onClick={handleLogout}>
                  {langString.logOutButton}
                </button>
              </div>
            </div>
          )}
        </li>
      </ul>
      <div onClick={toggleHamburgerOpen}>
        <Hamburger isOpen={isHamburgerOpen}></Hamburger>
      </div>
      <style jsx>{`
        .nav-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 10vh;
          justify-content: space-around;
          box-shadow: 0px 2px 2px #c0bfbf;
          padding: 1.5vh 0;
        }
        .nav-side {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-evenly;
          width: 50%;
        }
        .nav-heading {
          font-size: 3vw;
        }
        .nav-image {
          height: 3vw;
        }
        .nav-button {
          border: none;
          background-color: #f37950;
          box-shadow: 1px 1px 1px #888888;
          color: #fff2e9;
          border-radius: 4px;
          font-weight: 700;
          font-size: 2vh;
          height: auto;
        }
        .nav-container ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 0px;
        }

        .hamburger {
          display: none;
          z-index: 6;
        }

        @media (max-width: 1024px) {
          .hamburger {
            display: inline-block;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 6;
          }

          #nav-rigthside {
            display: ${isHamburgerOpen ? "flex" : "none"};
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background-color: white;
            height: 35vh;
            width: 35vw;
            top: 10vh;
            right: 0;
            position: fixed;
          }
          .nav-heading {
            font-size: 1.5rem;
          }
          .nav-image {
            height: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
}

export default Nav;

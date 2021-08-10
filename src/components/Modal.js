import React, { useContext, useState } from "react";
import { LocalizationContext } from "./LanguageContext";
import { UserContext } from "./UserContext";

function Modal(props) {
  const { langString, setLangString, langs } = useContext(LocalizationContext);
  const [tempUserInfo, setTempUserInfo] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    language: "",
  });
  const { isUserLoggedIn, setIsUserLoggedIn } = props.userLogStatus;
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    setUserPassword,
    userLanguage,
    setUserLanguage,
  } = useContext(UserContext);
  const handleChange = (e) => {
    setTempUserInfo((prevVal) => {
      return { ...prevVal, [e.target.name]: e.target.value };
    });
    console.log(tempUserInfo.userName);
  };
  const handleSubmit = (e) => {
    setUserName(tempUserInfo.userName);
    setUserEmail(tempUserInfo.userEmail);
    setUserPassword(tempUserInfo.userPassword);
    setUserLanguage(tempUserInfo.language);
    setLangString(() => {
      let lang;
      if (tempUserInfo.language === "tr") {
        lang = langs.tr;
      } else {
        lang = langs.en;
      }
      return lang;
    });
    handleClose(e);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setTempUserInfo({
      userName: "",
      userEmail: "",
      userPassword: "",
      language: "",
    });
    setIsUserLoggedIn("none");
  };

  return (
    <form style={{ display: isUserLoggedIn }}>
      <h4>{langString.modalTitle}</h4>
      <label htmlFor="userName">{langString.formNameLabel}</label>
      <input
        type="text"
        name="userName"
        placeholder={langString.formNameLabel}
        onChange={handleChange}
        value={tempUserInfo.userName}
        minLength="3"
        required={true}
      />
      <label htmlFor="userEmail">{langString.formEmailLabel}</label>
      <input
        type="mail"
        name="userEmail"
        onChange={handleChange}
        value={tempUserInfo.userEmail}
        placeholder="example@example.com"
      />
      <label htmlFor="userPassword">{langString.formPasswordLabel}</label>
      <input
        type="password"
        name="userPassword"
        onChange={handleChange}
        value={tempUserInfo.userPassword}
      />
      <fieldset onChange={handleChange}>
        <legend>{langString.formLanguageLabel}</legend>
        <p>
          <label htmlFor="en">English</label>
          <input type="radio" id="en" name="language" value="en" />
        </p>
        <p>
          <label htmlFor="tr">Türkçe</label>
          <input type="radio" id="tr" name="language" value="tr" />
        </p>
      </fieldset>
      <button type="submit" onClick={handleSubmit}>
        {langString.formSubmitButton}
      </button>
      <button onClick={handleClose}>{langString.formExitButton}</button>
    </form>
  );
}

export default Modal;

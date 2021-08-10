import React, { useContext, useState } from "react";
import { LocalizationContext } from "./LanguageContext";
import { UserContext } from "./UserContext";

function Modal(props) {
  const { langString } = useContext(LocalizationContext);
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
    console.log(tempUserInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(tempUserInfo.userName);
    setUserEmail(tempUserInfo.userEmail);
    setUserPassword(tempUserInfo.userPassword);
    setUserLanguage(tempUserInfo.language);
    setIsUserLoggedIn("none");
    setTempUserInfo({
      userName: "",
      userEmail: "",
      userPassword: "",
      language: "",
    });
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
          <label htmlFor="english">English</label>
          <input
            type="radio"
            id="english"
            name="language"
            value="English"
            checked
          />
        </p>
        <p>
          <label htmlFor="turkish">Türkçe</label>
          <input type="radio" id="turkish" name="language" value="Türkçe" />
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

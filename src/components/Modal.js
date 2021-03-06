import React, { useContext, useState } from "react";
import { LocalizationContext } from "./LanguageContext";

function Modal(props) {
  const { langString, setLangString, langs } = useContext(LocalizationContext);
  const [tempUserInfo, setTempUserInfo] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    language: "",
  });
  const { isUserLoggedIn, setIsUserLoggedIn } = props.userLogStatus;
  const { setUserName, setUserEmail, setUserPassword, setUserLanguage } =
    props.userInfo;
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
    <div className="login-form-container" style={{ display: isUserLoggedIn }}>
      <form className="login-form" style={{ display: isUserLoggedIn }}>
        <h4>{langString.loginFormTitle}</h4>
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
            <label htmlFor="tr">T??rk??e</label>
            <input type="radio" id="tr" name="language" value="tr" />
          </p>
        </fieldset>
        <div>
          <button type="submit" onClick={handleSubmit}>
            {langString.formSubmitButton}
          </button>
          <button onClick={handleClose}>{langString.formExitButton}</button>
        </div>
      </form>
    </div>
  );
}

export default Modal;

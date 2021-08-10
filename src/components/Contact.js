import React, { useContext } from "react";
import { LocalizationContext } from "./LanguageContext";
import { UserContext } from "./UserContext";

function Contact(props) {
  const { langString, setLangString, langs } = useContext(LocalizationContext);
  const { userName, userEmail } = useContext(UserContext);
  const countryList = [
    { id: "TR", name: "Turkey" },
    { id: "US", name: "United States of America" },
    { id: "GB", name: "United Kingdom" },
    { id: "DE", name: "Germany" },
    { id: "SE", name: "Sweden" },
    { id: "KE", name: "Kenya" },
    { id: "BR", name: "Brazil" },
    { id: "ZW", name: "Zimbabwe" },
  ];
  return (
    <div>
      <form>
        <h4>{langString.contactFormTitle}</h4>
        <label htmlFor="name">{langString.formNameLabel}</label>
        <input
          type="text"
          name="name"
          placeholder={langString.formNameLabel}
          value={userName ? userName : null}
        />
        <label htmlFor="mail">{langString.formEmailLabel}</label>
        <input type="mail" name="mail" value={userEmail ? userEmail : null} />
        <label htmlFor="phone">{langString.formPhoneLabel}</label>
        <input type="tel" name="phone" />
        <label htmlFor="country">{langString.formCountryLabel}</label>
        <input type="text" name="country" />
        <fieldset>
          <legend>{langString.formLanguageLabel}</legend>
          <p>
            <input type="radio" id="english" name="language" value="English" />
            <label for="english">English</label>
          </p>
          <p>
            <input type="radio" id="turkish" name="language" value="Türkçe" />
            <label for="turkish">Türkçe</label>
          </p>
        </fieldset>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." />
        <button type="submit">{langString.formSubmitButton}</button>
      </form>
    </div>
  );
}

export default Contact;

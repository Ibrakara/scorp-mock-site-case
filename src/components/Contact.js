import React, { useContext, useEffect, useState } from "react";
import { LocalizationContext } from "./LanguageContext";
import { UserContext } from "./UserContext";

function Contact(props) {
  const { langString, setLangString, langs } = useContext(LocalizationContext);
  const { userName, userEmail } = useContext(UserContext);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
    country_code: "",
    text: "",
  });
  useEffect(() => {
    setContactInfo((prevValue) => {
      return { ...prevValue, name: userName, email: userEmail };
    });
  }, [userName]);
  const handleContactInfoChange = (e) => {
    let inputValue = e.target.value;
    setContactInfo((prevValue) => {
      return { ...prevValue, [e.target.name]: inputValue };
    });
    console.log(e);
    if (e.target.name === "email") {
      validateEmail(inputValue, e);
    }
  };
  const countryList = langString.countryList.map((elem) => {
    return <option key={elem.id} value={elem.name} />;
  });
  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    const contactInfoJSON = JSON.stringify(contactInfo);
    console.log(contactInfoJSON);
    setContactInfo({
      name: "",
      email: "",
      phonenumber: "",
      country_code: "",
      text: "",
    });
  };
  const validateEmail = (email, e) => {
    const re = /\S+@\S+\.\S+/;
    const isValid = re.test(email);
    if (isValid) {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "red";
    }
  };
  return (
    <div>
      <form onSubmit={handleContactFormSubmit}>
        <h4>{langString.contactFormTitle}</h4>
        <label htmlFor="name">{langString.formNameLabel}</label>
        <input
          type="text"
          name="name"
          placeholder={langString.formNameLabel}
          value={contactInfo.name}
          onChange={handleContactInfoChange}
        />
        <label htmlFor="email">{langString.formEmailLabel}</label>
        <input
          type="email"
          name="email"
          onChange={handleContactInfoChange}
          value={contactInfo.email}
        />
        <label htmlFor="phonenumber">{langString.formPhoneLabel}</label>
        <input
          type="tel"
          name="phonenumber"
          minLength="9"
          maxLength="14"
          value={contactInfo.phonenumber}
          onChange={handleContactInfoChange}
        />
        <label htmlFor="country_code">{langString.formCountryLabel}</label>
        <input
          type="text"
          name="country_code"
          list="countries"
          value={contactInfo.country_code}
          onChange={handleContactInfoChange}
        />
        <datalist id="countries">{countryList}</datalist>
        <label htmlFor="text">Subject</label>
        <textarea
          id="subject"
          name="text"
          placeholder="Write something.."
          value={contactInfo.text}
          onChange={handleContactInfoChange}
        />
        <button type="submit">{langString.formSendButton}</button>
      </form>
    </div>
  );
}

export default Contact;

import React, { createContext, useState } from "react";

export const LocalizationContext = createContext();

export function LocalizationProvider(props) {
  const langs = {
    en: {
      homeButton: "Home",
      contactButton: "Contact",
      homePageName: "Circle Mock Site",
      contactPageName: "Contact",
      loginButton: "Login",
      changeLangButton: "Change Language",

      emailButton: "E-Mail",
      userNameButton: "User Name",
      logOutButton: "Log Out",
      loginFormTitle: "Login Form",
      formNameLabel: "User Name",
      formEmailLabel: "Email",
      formPhoneLabel: "Phone",
      formCountryLabel: "Country",
      formPasswordLabel: "Password",
      formSubmitButton: "Submit",
      formSendButton: "Send",
      formLanguageLabel: "Language",
      formExitButton: "Close",
      contactFormTitle: "Contact Form",
      dummyText:
        "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
      dummyTitle: "The European Languages",
      countryList: [
        { id: "TR", name: "Turkey" },
        { id: "US", name: "United States of America" },
        { id: "GB", name: "United Kingdom" },
        { id: "DE", name: "Germany" },
        { id: "SE", name: "Sweden" },
        { id: "KE", name: "Kenya" },
        { id: "BR", name: "Brazil" },
        { id: "ZW", name: "Zimbabwe" },
      ],
    },
    tr: {
      homeButton: "Ana Sayfa",
      contactButton: "??leti??im",
      homePageName: "Circle Mock Site",
      contactPageName: "??leti??im",
      loginButton: "Giri??",
      changeLangButton: "Dili De??i??tir",
      userNameButton: "Kullan??c?? Ad??",
      logOutButton: "????k????",
      emailButton: "E-Posta",
      loginFormTitle: "Giri?? Formu",
      formNameLabel: "Ad-Soyad",
      formEmailLabel: "Email",
      formPhoneLabel: "Telefon",
      formCountryLabel: "??lke",
      formPasswordLabel: "??ifre",
      formSubmitButton: "Onayla",
      formSendButton: "G??nder",
      formLanguageLabel: "Dil",
      formExitButton: "Kapat",
      contactFormTitle: "??leti??im Formu",
      dummyText:
        "Avrupa dilleri ayn?? ailenin ??yeleridir. Ayr?? varl??klar?? bir efsanedir. Avrupa, bilim, m??zik, spor vb. i??in ayn?? kelimeleri kullan??r. Diller yaln??zca gramerleri, telaffuzlar?? ve en yayg??n s??zc??kleri bak??m??ndan farkl??l??k g??sterir. Herkes yeni bir ortak dilin neden istendi??ini anl??yor: pahal?? ??evirmenlere ??deme yapmay?? reddedebiliriz. Bunu ba??armak i??in tek tip gramer, telaffuz ve daha yayg??n kelimelere sahip olmak gerekir. Birka?? dil birle??irse, ortaya ????kan dilin grameri, tek tek dillerin gramerinden daha basit ve d??zenlidir. Yeni ortak dil, mevcut Avrupa dillerinden daha basit ve d??zenli olacakt??r. Occidental kadar basit olacak; asl??nda, Bat??l?? olacak. Cambridge'den ????pheci bir arkada????m??n bana Occidental'??n ne oldu??unu s??yledi??i gibi, bir ??ngiliz i??in basitle??tirilmi?? ??ngilizce gibi g??r??necektir. Avrupa dilleri ayn?? ailenin ??yeleridir. Ayr?? varl??klar?? bir efsanedir. Avrupa, bilim, m??zik, spor vb. i??in ayn?? kelimeleri kullan??r. Diller yaln??zca gramerleri, telaffuzlar?? ve en yayg??n s??zc??kleri bak??m??ndan farkl??l??k g??sterir. Herkes yeni bir ortak dilin neden istendi??ini anl??yor: pahal?? ??evirmenlere ??deme yapmay?? reddedebiliriz.",
      dummyTitle: "Avrupa Dilleri",
      countryList: [
        { id: "TR", name: "T??rkiye" },
        { id: "US", name: "Amerika Birle??ik Devletleri" },
        { id: "GB", name: "Birle??ik Krall??k" },
        { id: "DE", name: "Almanya" },
        { id: "SE", name: "??sve??" },
        { id: "KE", name: "Kenya" },
        { id: "BR", name: "Brezilya" },
        { id: "ZW", name: "Zimbabve" },
      ],
    },
  };
  const [langString, setLangString] = useState(langs.en);

  return (
    <LocalizationContext.Provider value={{ langString, setLangString, langs }}>
      {props.children}
    </LocalizationContext.Provider>
  );
}

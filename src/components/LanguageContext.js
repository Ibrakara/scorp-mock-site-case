import React, { createContext, useState } from "react";

export const LocalizationContext = createContext();

export function LocalizationProvider(props) {
  const langs = {
    en: {
      homeButton: "Home",
      contactButton: "Contact",
      homePageName: "Scorp Mock Site",
      contactPageName: "Contact",
      loginButton: "Login",
      userNameButton: "User Name",
      logOutButton: "Log Out",
      dummyText:
        "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
      dummyTitle: "The European Languages",
    },
    tr: {
      homeButton: "Ana Sayfa",
      contactButton: "İletişim",
      homePageName: "Scorp Mock Site",
      contactPageName: "İletişim",
      loginButton: "Giriş",
      userNameButton: "Kullanıcı Adı",
      logOutButton: "Çıkış",
      dummyText:
        "Avrupa dilleri aynı ailenin üyeleridir. Ayrı varlıkları bir efsanedir. Avrupa, bilim, müzik, spor vb. için aynı kelimeleri kullanır. Diller yalnızca gramerleri, telaffuzları ve en yaygın sözcükleri bakımından farklılık gösterir. Herkes yeni bir ortak dilin neden istendiğini anlıyor: pahalı çevirmenlere ödeme yapmayı reddedebiliriz. Bunu başarmak için tek tip gramer, telaffuz ve daha yaygın kelimelere sahip olmak gerekir. Birkaç dil birleşirse, ortaya çıkan dilin grameri, tek tek dillerin gramerinden daha basit ve düzenlidir. Yeni ortak dil, mevcut Avrupa dillerinden daha basit ve düzenli olacaktır. Occidental kadar basit olacak; aslında, Batılı olacak. Cambridge'den şüpheci bir arkadaşımın bana Occidental'ın ne olduğunu söylediği gibi, bir İngiliz için basitleştirilmiş İngilizce gibi görünecektir. Avrupa dilleri aynı ailenin üyeleridir. Ayrı varlıkları bir efsanedir. Avrupa, bilim, müzik, spor vb. için aynı kelimeleri kullanır. Diller yalnızca gramerleri, telaffuzları ve en yaygın sözcükleri bakımından farklılık gösterir. Herkes yeni bir ortak dilin neden istendiğini anlıyor: pahalı çevirmenlere ödeme yapmayı reddedebiliriz.",
      dummyTitle: "Avrupa Dilleri",
    },
  };
  const [langString, setLangString] = useState(langs.en);
  const changeLangToEn = () => {
    setLangString(langs.en);
  };
  const changeLangToTr = () => {
    setLangString(langs.tr);
  };

  return (
    <LocalizationContext.Provider
      value={{ langString, changeLangToTr, changeLangToEn }}
    >
      {props.children}
    </LocalizationContext.Provider>
  );
}

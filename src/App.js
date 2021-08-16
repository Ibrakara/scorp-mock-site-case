import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { LocalizationProvider } from "./components/LanguageContext";
import { UserProvider } from "./components/UserContext";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userLanguage, setUserLanguage] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState("none");
  const showHideModal = () => {
    if (isUserLoggedIn === "none") {
      setIsUserLoggedIn("flex");
    } else {
      setIsUserLoggedIn("none");
    }
  };
  return (
    <LocalizationProvider>
      <Router>
        <div className="App">
          <Nav
            modalDisplay={showHideModal}
            userInfo={{
              userName,
              setUserName,
              userEmail,
              setUserEmail,
              setUserPassword,
              setUserLanguage,
            }}
          />
          <Modal
            userLogStatus={{ isUserLoggedIn, setIsUserLoggedIn }}
            userInfo={{
              setUserName,
              setUserEmail,
              setUserLanguage,
              setUserPassword,
            }}
          />
          <Switch>
            <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
            <Route
              render={(props) => {
                return (
                  <Contact {...props} userInfo={{ userName, userEmail }} />
                );
              }}
              path={process.env.PUBLIC_URL + "/contact"}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </LocalizationProvider>
  );
}

export default App;

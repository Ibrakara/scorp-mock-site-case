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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState("none");
  const showHideModal = () => {
    if (isUserLoggedIn === "none") {
      setIsUserLoggedIn("block");
    } else {
      setIsUserLoggedIn("none");
    }
  };
  return (
    <LocalizationProvider>
      <UserProvider>
        <Router>
          <div className="App">
            <Nav modalDisplay={showHideModal} />
            <Modal userLogStatus={{ isUserLoggedIn, setIsUserLoggedIn }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </LocalizationProvider>
  );
}

export default App;

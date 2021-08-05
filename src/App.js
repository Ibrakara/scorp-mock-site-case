import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { LocalizationProvider } from "./components/LanguageContext";

function App() {
  return (
    <LocalizationProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </LocalizationProvider>
  );
}

export default App;

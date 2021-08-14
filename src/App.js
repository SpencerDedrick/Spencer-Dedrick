import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Footer from "./components/Footer";
import Calculator from "./Pages/Projects/Calculator";

import "./components/Styles/App.css";
import "./components/Styles/tailwind.css";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
          </Switch>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

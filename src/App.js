import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work/Work";
import Footer from "./components/Footer";
import newProjects from "./Pages/Projects/Projects";
import ProjectPage from "./Pages/ProjectPage";

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
          {newProjects.map((project) => {
            return (
              <Route path={`/${project.name}`}>
                <ProjectPage
                  name={project.name}
                  icons={project.icons}
                  description1={project.description1}
                  description2={project.description2}
                  demo={project.demo}
                  source={project.source}
                ></ProjectPage>
              </Route>
            );
          })}
          <Route path="/work">
            <Work />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

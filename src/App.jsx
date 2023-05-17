import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import projectData from "./data/ProjectData";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path={`/projectpage/:id`}
            element={<ProjectPage projectData={projectData} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

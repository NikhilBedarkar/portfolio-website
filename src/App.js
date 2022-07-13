import "./App.css";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import ProjectList from "./components/projectList/ProjectList";

function App() {
  return (
    <div className="App">
      <Intro />
      <ProjectList/>
      <Contact />
    </div>
  );
}

export default App;

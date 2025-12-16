import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

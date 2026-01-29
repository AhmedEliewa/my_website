import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAppear(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(appear);
  return (
    <div>
      <div
        className={`fixed w-9 h-9 bg-black right-8 bottom-8 rounded-xl grid place-items-center cursor-pointer hover:bg-[#4e4747] transition
            ${appear ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp className="text-amber-50" />
      </div>
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

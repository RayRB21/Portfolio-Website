import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
/*import ContactForm from "./components/ContactForm";*/

function App() {
  return (
    <div className="pages">
      <Home />
      <Navbar navColor="#0000004d" />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

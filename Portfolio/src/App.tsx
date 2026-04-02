import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="pages">
      <Home />
      <Navbar navColor="#0000004d" />
      <About />
      <Projects />
    </div>
  );
}

export default App;

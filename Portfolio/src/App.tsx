import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="pages">
      <Home />
      <Navbar navColor="#0000004d" />
      <About />
    </div>
  );
}

export default App;

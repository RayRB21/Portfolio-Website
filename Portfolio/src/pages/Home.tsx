import "../css/home.css";

import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <Navbar />
        <AnimatedBackground />
      </div>
      <h1>test</h1>
    </div>
  );
}

export default Home;

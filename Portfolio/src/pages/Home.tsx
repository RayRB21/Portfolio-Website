import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <Navbar />
        <AnimatedBackground />
      </div>
    </div>
  );
}

export default Home;

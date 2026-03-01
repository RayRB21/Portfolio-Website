import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  const items = ["New York", "Paris", "London", "Brighton"];
  return (
    /*<div>
      <ListGroup items={items} heading="Cities" />
      <Alert>
        Hello<span> testing</span>
      </Alert>
      <Button
        onClick={() => console.log("Button Pressed")}
        buttonName="Press me"
      />
            
    </div>*/

    <div>
      <Navbar />
      <Home />
      <AnimatedBackground />
    </div>
  );
}

export default App;

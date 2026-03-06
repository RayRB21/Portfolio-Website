import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Home from "./pages/Home";

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

    <>
      <Home />
    </>
  );
}

export default App;

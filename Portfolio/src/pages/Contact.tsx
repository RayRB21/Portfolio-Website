import "../css/contact.css";
import { useInView } from "../components/ScrollAnimation";
/*import Coin from "../components/Coin";*/
import ContactForm from "../components/ContactForm";

function Contact() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div id="contact" ref={ref} style={{ marginTop: "1vh" }}>
      <div className="container text-center">
        <h1
          className={`subtitle animate-on-scroll ${isVisible ? "animate" : ""} `}
        >
          Contact
        </h1>
      </div>
      {/*<Coin style={{ top: "230vw", left: "40vh" }} />*/}

      <ContactForm />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Contact;

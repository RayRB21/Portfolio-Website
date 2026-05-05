import "../css/contact.css";
import { useInView } from "../components/ScrollAnimation";

function Contact() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div id="contact" ref={ref} style={{ marginTop: "1vh" }}>
      <h1
        className={`subtitle animate-on-scroll ${isVisible ? "animate" : ""} `}
      >
        Contact
      </h1>
      <div
        className={`container content animate-on-scroll${isVisible ? "animate" : ""} `}
        style={{ marginTop: "6vh" }}
      >
        <div className="row">
          <div className="col-md-4">
            <a href="mailto:rayrb2001@gmail.com">
              <img
                alt="rayrb2001@gmail.com"
                src="/mail-icon.png"
                className="contact-icon"
              />
            </a>
            <a href="mailto:rayrb2001@gmail.com" className="contact-text">
              RayRB2001@gmail.com
            </a>
          </div>

          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/rayan-butt-cs/">
              <img
                alt="linkedin"
                src="/linkedin-circle.webp"
                className="contact-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rayan-butt-cs/"
              className="contact-text"
            >
              Rayan-Butt-CS
            </a>
          </div>

          <div className="col-md-4">
            <img
              alt="phone number"
              src="/Phone_icon.png"
              className="contact-icon"
            />
            <a className="contact-text">07824466675</a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Contact;

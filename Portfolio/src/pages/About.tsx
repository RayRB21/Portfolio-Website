import "../css/about.css";
import { useInView } from "../components/ScrollAnimation";

function About() {
  const { ref, isVisible } = useInView(0.5);

  return (
    <div
      id="about"
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "animate" : ""} `}
      style={{ marginTop: "1vh" }}
    >
      <h1 className="subtitle">About me </h1>
      <div
        className={`container content animate-on-scroll ${
          isVisible ? "animate" : ""
        }`}
      >
        <div className="row">
          {/* Left side (text) */}
          <div className="col-md-6">
            <div className="text-center">
              <img
                style={{ width: "30%", height: "auto", marginTop: "6vh" }}
                src="../public/profile_pic.png"
                alt="About"
              />
            </div>
            <h4 className="text-center about-text" style={{ marginTop: "6vh" }}>
              Studied Computer Science at the University of York specialising in
              AI, computer vision, and full-stack development. Experienced in
              Deployment, Testing and Databases with projects in image
              recognition, facial landmark detection, and web application
              development. Strong problem-solving skills, adaptable in
              fast-paced environments, and eager to contribute to innovative
              projects and learn new skills. Always ready to take charge and
              tackle problems with unique and tailored approaches.
            </h4>
          </div>

          {/* Right side (image) */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <img
                  src="../public/logos/java_logo.png"
                  className={`icon icon-animation ${
                    isVisible ? "animate" : ""
                  }`}
                  style={{ marginTop: "2vh" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src="../public/logos/javascript-logo.webp"
                  className={`icon icon-animation ${
                    isVisible ? "animate" : ""
                  }`}
                />
              </div>
              <div className="col-md-3">
                <img
                  src="../public/logos/Python-logo.svg.png"
                  className={`icon icon-animation ${
                    isVisible ? "animate" : ""
                  }`}
                  style={{ marginTop: "2vh" }}
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "4vh" }}>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <img
                  src="../public/logos/React-icon.svg.png"
                  className={`icon icon-animation ${
                    isVisible ? "animate" : ""
                  }`}
                  style={{ marginTop: "2vh" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src="../public/sql-logo.png"
                  className={`icon icon-animation ${
                    isVisible ? "animate" : ""
                  }`}
                />
              </div>
              <div className="col-md-3">
                <img
                  src="../public/logos/Typescript_logo.svg.png"
                  className={`icon icon-animation ${
                    isVisible ? "animate" : ""
                  }`}
                  style={{ marginTop: "2vh" }}
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "4vh" }}>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <img
                  src="../public/git-logo.webp"
                  className={`icon icon-animation ${
                    isVisible ? "animate" : ""
                  }`}
                  style={{ marginTop: "2vh" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src="../public/Go-Logo.png"
                  className={`icon icon-animation ${
                    isVisible ? "animate" : ""
                  }`}
                />
              </div>
              <div className="col-md-3">
                <img
                  src="../public/Postgresql-logo.png"
                  className={`icon icon-animation ${
                    isVisible ? "animate" : ""
                  }`}
                  style={{ marginTop: "2vh" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center"></div>
    </div>
  );
}

export default About;

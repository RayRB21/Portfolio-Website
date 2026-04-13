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
      <div className="container">
        <div className="row align-items-center">
          {/* Left side (text) */}
          <div className="col-md-6">
            <img
              src="../public/about.png"
              className="dflex justify-content-centre"
              alt="About"
            />
            <h4 className="text-center">
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
            <img
              src="../public/logos/java_logo.png"
              className="dflex justify-content-centre"
            />
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center"></div>
    </div>
  );
}

export default About;

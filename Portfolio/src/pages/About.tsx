import "../css/about.css";
import { useInView } from "../components/ScrollAnimation";
/*import Coin from "../components/Coin";*/

function About() {
  const { ref, isVisible } = useInView(0.2);
  const skills = [
    { name: "Python", img: "/logos/Python-logo.svg.png" },
    { name: "JavaScript", img: "/logos/javascript-logo.webp" },
    { name: "TypeScript", img: "/Typescript_logo.svg.png" },
    { name: "PostgreSQL", img: "/Postgresql-logo.png" },
    { name: "React", img: "/logos/React-icon.svg.png" },
    { name: "Flask", img: "/flask-logo.webp" },
    { name: "Go", img: "/Go-Logo.png" },
    { name: "Java", img: "/logos/java_logo.png" },
  ];

  return (
    <div
      id="about"
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "animate" : ""} `}
      style={{ marginTop: "1vh" }}
    >
      {/*<Coin style={{ top: "20vh", left: "30vh" }} />
      <Coin style={{ top: "50vw", left: "180vh" }} /> */}
      <div className="container text-center">
        <h1 className="subtitle ">About Me </h1>
      </div>

      <div
        className={`container icon-animation ${isVisible ? "animate" : ""}`}
        style={{ transitionDelay: "0.3s" }}
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
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
        </div>

        <div className="container" style={{ marginTop: "4vh" }}>
          <div className="row">
            {skills.map((skill) => (
              <div
                className="col-md-3"
                key={skill.name}
                style={{ marginBottom: "2vh" }}
              >
                <div className="icon-box text-center ">
                  <h4 className="icon-text">{skill.name}</h4>
                  <img className="icon" src={skill.img} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import "../css/about.css";

function About() {
  return (
    <div id="about">
      <h1>About me </h1>
      <div className="container d-flex justify-content-center">
        <img
          src="../public/about.png"
          className="about-img"
          width="350px"
          alt="About"
        />
      </div>
      <div className="container d-flex justify-content-center">
        <h4 className="about-desc">
          Studied Computer Science at the University of York specialising in AI,
          computer vision, and full-stack development. Experienced in
          Deployment, Testing and Databases with projects in image recognition,
          facial landmark detection, and web application development. Strong
          problem-solving skills, adaptable in fast-paced environments, and
          eager to contribute to innovative projects and learn new skills.
          Always ready to take charge and tackle problems with unique and
          tailored approaches.
        </h4>
      </div>
      <div className="container">
        <img src="../public/logos/java_logo.png" />
      </div>
    </div>
  );
}

export default About;

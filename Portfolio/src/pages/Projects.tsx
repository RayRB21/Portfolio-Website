import ProjectTemplate from "../components/ProjectTemplate";
import { useInView } from "../components/ScrollAnimation";

function Projects() {
  const { ref, isVisible } = useInView(0.5);

  return (
    <div id="projects" style={{ marginTop: "5vh" }}>
      <h1
        ref={ref}
        className={`subtitle animate-on-scroll ${isVisible ? "animate" : ""} `}
      >
        Projects
      </h1>
      <div
        className={`content animate-on-scroll ${isVisible ? "animate" : ""}`}
      >
        <ProjectTemplate
          projectName="Budgeting Web App"
          projectDesc="Developed, deployed and maintained a personal budgeting web application which uses a linked database, enabling users to record income and expenses, set savings goals, and view spending trends. The project incorporates Python, HTML/CSS, and Postgres for backend, frontend and data storage, demonstrating skills in full-stack development, API design, and database integration. It also incorporates a CI/CD Pipeline with GitHub Actions to automate testing and improve deployment reliability.
"
          projectImg="../public/budgeter-graphs.png"
          projectLink="https://github.com/RayRB21/Budgeter"
          appLink="https://budgeterapp-e0fa271274bb.herokuapp.com/"
        />
        <ProjectTemplate
          projectName="Project 2"
          projectDesc="This is a project"
          projectImg="../public/Portfolio-link.png"
          projectLink="https://github.com/RayRB21/Budgeter"
          appLink="https://budgeterapp-e0fa271274bb.herokuapp.com/"
        />
        <ProjectTemplate
          projectName="Project 3"
          projectDesc="This is a project"
          projectImg="../public/Portfolio-link.png"
          projectLink="https://github.com/RayRB21/Budgeter"
          appLink="https://budgeterapp-e0fa271274bb.herokuapp.com/"
        />
      </div>
    </div>
  );
}

export default Projects;

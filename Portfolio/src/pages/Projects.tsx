import ProjectTemplate from "../components/ProjectTemplate";

function Projects() {
  return (
    <div id="projects" style={{ marginTop: "5vh" }} className="projects">
      <h1 className="subtitle">Projects</h1>
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
  );
}

export default Projects;

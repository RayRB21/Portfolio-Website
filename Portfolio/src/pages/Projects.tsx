import ProjectTemplate from "../components/ProjectTemplate";

function Projects() {
  return (
    <div id="projects" className="projects">
      <h1 className="subtitle">Projects</h1>
      <ProjectTemplate
        projectName="Project 1"
        projectDesc="This is a project"
        projectImg="../public/budgeter-graphs.png"
        projectLink="https://github.com/RayRB21/Budgeter"
      />
      <ProjectTemplate
        projectName="Project 2"
        projectDesc="This is a project"
        projectImg="../public/Portfolio-link.png"
        projectLink="https://github.com/RayRB21/Budgeter"
      />
      <ProjectTemplate
        projectName="Project 3"
        projectDesc="This is a project"
        projectImg="../public/Portfolio-link.png"
        projectLink="https://github.com/RayRB21/Budgeter"
      />
    </div>
  );
}

export default Projects;

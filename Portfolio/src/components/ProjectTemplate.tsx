import "../css/project-template.css";

interface Props {
  projectName: string;
  projectDesc: string;
  projectImg: string;
  projectLink: string;
}

function ProjectTemplate({
  projectName,
  projectDesc,
  projectImg,
  projectLink,
}: Props) {
  return (
    <div
      className="container-fluid"
      style={{ marginTop: "200px", marginBottom: "100px" }}
    >
      <div className="row">
        <div className="col-md-1"></div>
        {/* IMAGE */}
        <div className="col-md-4">
          <div className="img-wrapper">
            <a href={projectLink}>
              <img src={projectImg} className="img-fluid project-img" />
            </a>
          </div>
        </div>
        <div className="col-md-2" />

        {/* TEXT */}
        <div className="col-md-4">
          <h1>{projectName}</h1>
          <p>{projectDesc}</p>
          <a href="#">
            <h5 className="link-button">Live App</h5>
          </a>
          <br />
          <br />
          <a href="#">
            <h5 className="link-button">GitHub</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;

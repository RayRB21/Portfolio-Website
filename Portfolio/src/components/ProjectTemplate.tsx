import "../css/project-template.css";

interface Props {
  projectName: string;
  projectDesc: string;
  projectImg: string;
  projectLink: string;
  appLink: string;
}

function ProjectTemplate({
  projectName,
  projectDesc,
  projectImg,
  projectLink,
  appLink,
}: Props) {
  return (
    <div
      className="container-fluid"
      style={{ marginTop: "10%", marginBottom: "5%" }}
    >
      <div className="row">
        <div className="col-md-1"></div>
        {/* IMAGE */}
        <div className="col-md-6">
          <div className="img-wrapper">
            <a href={projectLink}>
              <img src={projectImg} className="img-fluid project-img" />
            </a>
          </div>
        </div>

        {/* TEXT */}
        <div className="col-md-4" style={{ zIndex: 3 }}>
          <h2 className="project-title">{projectName}</h2>
          <p style={{ marginTop: "5%" }}>{projectDesc}</p>
          <div className="row" style={{ marginTop: "5%" }}>
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <a href={appLink}>
                <h6 className="link-button">Live App</h6>
              </a>
            </div>
            <div className="col-md-4">
              <a href={projectLink}>
                <h6 className="link-button">GitHub</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;

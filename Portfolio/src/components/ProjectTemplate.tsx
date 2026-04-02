import "../css/project-template.css";

interface Props {}
function ProjectTemplate() {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left side (text) */}
        <div className="col-md-6">
          <h1>My Portfolio</h1>
          <p>This is some text about me.</p>
        </div>

        {/* Right side (image) */}
        <div className="col-md-6">
          <img src="/your-image.png" className="img-fluid" alt="example" />
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;

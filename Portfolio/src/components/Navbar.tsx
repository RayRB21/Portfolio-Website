import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar py-2">
      <div className="container-fluid">
        <a
          className="navbar-brand logos"
          href="https://www.linkedin.com/in/rayan-butt-cs/"
        >
          <img src="../public/LinkedIn.png.webp" alt="Bootstrap" width="40" />
        </a>
        <a className="navbar-brand logos" href="https://github.com/RayRB21">
          <img src="../public/github.webp" alt="Bootstrap" width="40" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link fs-5" aria-current="page" href="#">
              About Me
            </a>
            <a className="nav-link fs-5" href="#">
              Projects
            </a>
            <a className="nav-link fs-5" href="#">
              Skills and Education
            </a>
            <a className="nav-link fs-5" aria-disabled="true">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

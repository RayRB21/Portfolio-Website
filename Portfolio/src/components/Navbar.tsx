import "../css/Navbar.css";

interface Props {
  navColor?: string;
}

function Navbar({ navColor }: Props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark custom-navbar py-2 sticky-top"
      style={{ backgroundColor: navColor }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand logos"
          href="https://www.linkedin.com/in/rayan-butt-cs/"
        >
          <img
            src="../public/logos/LinkedIn.png.webp"
            alt="Linkedin"
            width="40"
          />
        </a>
        <a className="navbar-brand logos" href="https://github.com/RayRB21">
          <img src="../public/logos/github.webp" alt="GitHub" width="40" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link fs-5" aria-current="page" href="#about">
              About Me
            </a>
            <a className="nav-link fs-5" href="#projects">
              Projects
            </a>
            <a className="nav-link fs-5" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

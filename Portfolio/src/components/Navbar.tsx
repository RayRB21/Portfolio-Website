import "../css/Navbar.css";

interface Props {
  navColor?: string;
}

function Navbar({ navColor }: Props) {
  return (
    <nav
      className=" container navbar navbar-expand-lg navbar-dark custom-navbar py-2 sticky-top"
      style={{ backgroundColor: navColor }}
    >
      <div
        className="justify-content-center collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a
            className="nav-link align-items-center d-flex"
            href="https://github.com/RayRB21"
          >
            <img src="/logos/github.webp" className="nav-logo d-inline-block" />
            GitHub
          </a>
          <a
            className="nav-link align-items-center d-flex"
            href="https://www.linkedin.com/in/rayan-butt-cs/"
          >
            <img
              src="/logos/LinkedIn.png.webp"
              className="nav-logo d-inline-block"
            />
            Linkedin
          </a>
          <a className="nav-link align-items-center d-flex" href="#contact">
            <img
              src="/Gmail_icon.svg.png"
              className="nav-logo d-inline-block"
            />
            Gmail
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

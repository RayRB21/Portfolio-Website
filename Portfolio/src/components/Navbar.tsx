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
          <a className="nav-link" aria-current="page" href="#about">
            About Me
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#contact">
            Social
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

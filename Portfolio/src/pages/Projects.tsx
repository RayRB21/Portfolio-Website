import ProjectTemplate from "../components/ProjectTemplate";
import { useInView } from "../components/ScrollAnimation";
/*import Coin from "../components/Coin";*/

function Projects() {
  const { ref, isVisible } = useInView(0.5);

  return (
    <div id="projects" style={{ marginTop: "5vh" }}>
      <div className="container text-center">
        <h1
          ref={ref}
          className={`subtitle animate-on-scroll ${isVisible ? "animate" : ""} `}
        >
          Projects
        </h1>
      </div>
      {/*<Coin style={{ top: "170vw", left: "120vh" }} />*/}
      <div
        className={`content animate-on-scroll ${isVisible ? "animate" : ""}`}
      >
        <ProjectTemplate
          projectName="Trading Card Price Tracker (Golang API)"
          projectDesc="Built a Go CLI tool that reverse engineered PriceCharting's internal paginated JSON endpoint, discovered via Chrome DevTools network analysis, to scrape live prices across 700+ Riftbound trading cards, persisting time-series snapshots to a SQLite database using versioned migrations. Implemented a pure Go analysis engine to compute price movement across stored snapshots, surfacing spike detection with a configurable threshold, top movers ranked by absolute percentage change, and per-card price history with moving averages. Designed a cobra-powered CLI with subcommands with idiomatic Go package structure."
          projectImg="/Go-Scraper.png"
          projectLink="https://github.com/RayRB21/tcg-price-tracker"
          appLink="https://github.com/RayRB21/tcg-price-tracker"
        />
        <ProjectTemplate
          projectName="Sour Casa Bakery E-Commerce Website (React /Typescript /Flask)"
          projectDesc="Built and deployed a full-stack e-commerce website for a family bakery using React, TypeScript, and Flask. Implemented a responsive user interface, dynamic product catalogue, shopping basket, Stripe payment integration, and delivery scheduling logic. Currently expanding the backend with a PostgreSQL database to replace hardcoded product data, enabling persistent product, order, and customer management through a REST API."
          projectImg="/website-image.png"
          projectLink="https://github.com/RayRB21/SourCasa-Website"
          appLink="https://sourcasa.netlify.app/"
        />
        <ProjectTemplate
          projectName="Budgeting Web App (Flask)"
          projectDesc="Developed, deployed and maintained a personal budgeting web application which uses a linked database, enabling users to record income and expenses, set savings goals, and view spending trends. The project incorporates Python, HTML/CSS, and Postgres for backend, frontend and data storage, demonstrating skills in full-stack development, API design, and database integration. It also incorporates a CI/CD Pipeline with GitHub Actions to automate testing and improve deployment reliability.
"
          projectImg="/budgeter-graphs.png"
          projectLink="https://github.com/RayRB21/Budgeter"
          appLink="https://budgeterapp-e0fa271274bb.herokuapp.com/"
        />
      </div>
    </div>
  );
}

export default Projects;

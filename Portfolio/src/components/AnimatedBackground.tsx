import { useEffect, useRef } from "react";
import "../css/animated-background.css";
/*import Coin from "./Coin";*/

const AnimatedBackground = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const backgrounds = [
      "rgba(255, 0, 0, 0.05)",
      "rgba(0, 110, 255, 0.05)",
      "rgba(240, 0, 200, 0.05)",
      "rgba(255, 230, 0, 0.05)",
    ];
    const largeNums = [60, 90, 120, 150];
    const smallNums = [3, 4, 5, 6];

    const coordinates: { x: number | undefined; y: number | undefined } = {
      x: undefined,
      y: undefined,
    };

    const generateNumber = () => Math.floor(Math.random() * 4);

    const createRandomNumbers = (): [number, number, number] => {
      return [generateNumber(), generateNumber(), generateNumber()];
    };

    const configureWideElement = (newEle: HTMLDivElement) => {
      const [width, height, color] = createRandomNumbers();
      newEle.style.width = largeNums[width] + "px";
      newEle.style.height = smallNums[height] + "px";
      newEle.style.backgroundColor = backgrounds[color];
      newEle.classList.add("line", "line-wide");
    };

    const configureTallElement = (newEle: HTMLDivElement) => {
      const [width, height, color] = createRandomNumbers();
      newEle.style.width = smallNums[width] + "px";
      newEle.style.height = largeNums[height] + "px";
      newEle.style.backgroundColor = backgrounds[color];
      newEle.classList.add("line", "line-high");
    };

    const addElement = () => {
      const newEle = document.createElement("div");
      const typeNum = Math.round(Math.random());

      if (typeNum === 0) {
        configureWideElement(newEle);
      } else {
        configureTallElement(newEle);
      }

      if (coordinates.x !== undefined && coordinates.y !== undefined) {
        newEle.style.left = coordinates.x + "px";
        newEle.style.top = coordinates.y + "px";
      }

      header.appendChild(newEle);
    };

    const updateCoordinates = (e: MouseEvent) => {
      if (coordinates.x === undefined || coordinates.y === undefined) {
        coordinates.x = e.clientX;
        coordinates.y = e.clientY;
        addElement();
        return;
      }

      if (
        Math.abs(coordinates.x - e.clientX) > 200 ||
        Math.abs(coordinates.y - e.clientY) > 100
      ) {
        coordinates.x = e.clientX;
        coordinates.y = e.clientY;
        addElement();
      }
    };

    header.addEventListener("mousemove", updateCoordinates);

    // Cleanup (VERY important in React)
    return () => {
      header.removeEventListener("mousemove", updateCoordinates);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      {/*<Coin style={{ top: "30vw", left: "180vh" }} /> */}
      <div className="container">
        <div className="row" style={{ marginTop: "20%" }}>
          <div className="col-md-3"></div>
          <div className="col-md-7">
            <div className="page-title">
              <span className="letter">Rayan Butt</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <span className="typewriter" style={{ color: "red" }}>
                Full Stack Software Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "2vh" }}>
        <div className="col-6">
          <a
            href="/Rayan-Butt-CV-2026.pdf"
            className="d-flex justify-content-end"
          >
            <h5 className="cv-link d-flex align-items-center justify-content-center">
              Download CV
            </h5>
          </a>
        </div>
        <div className="col-6">
          <a href="#contact">
            <h5 className="cv-link d-flex align-items-center justify-content-center">
              Contact Me
            </h5>
          </a>
        </div>
      </div>
    </header>
  );
};

export default AnimatedBackground;

import "./App.css";
import SvgStar from "./components/Svgstar";
import num1 from "./assets/images/Group 116.png";
import num2 from "./assets/images/Group 115.png";
import num3 from "./assets/images/Group 113.png";
import num4 from "./assets/images/Group 114.png";
import polygon from "./assets/images/Polygon 1.png";

function App() {
  return (
    <>
      <div className="header_image">
        <div className="top_line">
          <div style={{ backgroundColor: "#db253e" }} className="line"></div>
          <div style={{ backgroundColor: "#fac544" }} className="line"></div>
          <div style={{ backgroundColor: "#3ebec1" }} className="line"></div>
          <div style={{ backgroundColor: "#3a394b" }} className="line"></div>
        </div>
        <h1>GET MORE STUDENTS NOW!</h1>
        <div className="circles_container">
          <div className="circle_item">
            <p>IDENTIFY</p>
          </div>
          <div className="circle_item">
            <p>OPTIMIZE</p>
          </div>
          <div className="circle_item">
            <p>DELIVER</p>
          </div>
        </div>
      </div>
      <div className="center-child">
        <hr
          style={{
            width: 343,
            height: 15,
            backgroundColor: "#3ebec1",
            border: "none",
          }}
        />
      </div>
      <div className="slogan-text">
        <p style={{ color: "#3A394B", fontSize: 50, fontWeight: 800 }}>
          Apex Media has partnered with universities for decades to face the
          challenge of declining enrollment
        </p>
      </div>
      <a className="center-child">
        <button
          style={{
            width: 255,
            height: 63,
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#fac544",
            backgroundColor: "#3A394B",
            border: "none",
          }}
        >
          Learn More
        </button>
      </a>
      <div className="method-section-container">
        <div className="method-section-left col-6">
          <img src={num1} />
          <img src={polygon} className="polygon" />
          <img src={num2} />
          <img src={polygon} className="polygon" />
          <img src={num3} />
          <img src={polygon} className="polygon" />
          <img src={num4} />
        </div>
        <div className="col-6">
          <div className="method-section-right">
            <h3>OUR METHOD</h3>
            <p>
              Apex Media uses advanced, proprietary methods and technology to
              identify, locate, and connect with your ideal student segment.{" "}
            </p>
            <p>
              We then utilize an omni-channel approach to actively engage your
              potential students to turn them into enrollments.
            </p>
            <button
              style={{
                width: 255,
                height: 63,
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "rgb(58, 57, 75)",
                backgroundColor: "rgb(250, 197, 68)",
                border: "none",
                textDecoration: "none",
                marginTop: 20,
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <SvgStar />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const colorsAction = [
    {
      first: "#db253e",
      second: "#376667",
      third: "#50295f",
      forth: "#483d4f",
      text1: "#ffffff",
      text2: "#747376d7",
      text3: "#747376d7",
      text4: "#747376d7",
    },
    {
      first: "#8f1929",
      second: "#3ebec1",
      third: "#50295f",
      forth: "#483d4f",
      text1: "#747376d7",
      text2: "#ffffff",
      text3: "#747376d7",
      text4: "#747376d7",
    },
    {
      first: "#8f1929",
      second: "#376667",
      third: "#7e14a8",
      forth: "#483d4f",
      text1: "#747376d7",
      text2: "#747376d7",
      text3: "#ffffff",
      text4: "#747376d7",
    },
    {
      first: "#8f1929",
      second: "#376667",
      third: "#50295f",
      forth: "#a18cad",
      text1: "#747376d7",
      text2: "#747376d7",
      text3: "#747376d7",
      text4: "#ffffff",
    },
  ];
  const [state, setState] = useState({
    first: "#db253e",
    second: "#376667",
    third: "#50295f",
    forth: "#483d4f",
    text1: "#ffffff",
    text2: "#747376d7",
    text3: "#747376d7",
    text4: "#747376d7",
  });
  const active = (num) => {
    console.log(num);
    setState(colorsAction[num]);
  };
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

      <div
        style={{
          width: 600,
          height: 600,
          margin: "10.3%",
          position: "relative",
        }}
      >
        <svg
          height="160"
          width="160"
          style={{ zIndex: 100, top: 230, left: 230 }}
        >
          <circle cx="80" cy="80" r="80" fill="#fac544" />
        </svg>
        <div className="svg-center-text">
          <p>ENROLLED</p>
          <p>STUDENTS</p>
        </div>
        <div style={{ position: "relative" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="3 2 24 24"
            onClick={() => active(0)}
          >
            <g fill={state.first}>
              <path d="M 15 14 L 21 8 L 18 2 L 12 2 L 9 8" />
            </g>
            <text x="12.5" y="6" fill={state.text1} className="svg-text">
              SITUATION
            </text>
            <text x="12" y="7.5" fill={state.text1} className="svg-text">
              ASSESSMENT
            </text>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            onClick={() => active(1)}
            style={{ width: 300, top: 150, left: 300 }}
          >
            <g fill={state.second} onClick={() => active(1)}>
              <path d="M 12 3 L 12 9 L 6 12 L 0 6 L 6 0" />
            </g>
            <text x="4.5" y="5" fill={state.text2} className="svg-text">
              ENROLLMENT
            </text>
            <text x="6" y="6.5" fill={state.text2} className="svg-text">
              FUNNEL
            </text>
            <text x="4" y="8" fill={state.text2} className="svg-text">
              MANAGEMENT
            </text>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            onClick={() => active(2)}
            style={{ width: 300, top: 300, left: 150 }}
          >
            <g fill={state.third}>
              <path d="M 12 6 L 9 12 L 3 12 L 0 6 L 6 0" />
            </g>
            <text x="2.5" y="7.5" fill={state.text3} className="svg-text">
              COMPETITIVE
            </text>
            <text x="3.5" y="9" fill={state.text3} className="svg-text">
              INSIGHTS
            </text>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            onClick={() => active(3)}
            style={{ width: 300, position: "absolute", top: 150 }}
          >
            <g fill={state.forth}>
              <path d="M 12 6 L 6 12 L 0 9 L 0 3 L 6 0" />
            </g>

            <text x="2.5" y="5.5" fill={state.text4} className="svg-text">
              STUDENT
            </text>
            <text x="1" y="7" fill={state.text4} className="svg-text">
              PERSPECTIVES
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;

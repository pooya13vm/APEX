import { useState } from "react";
import "../App.css";

const SvgStar = ({ isMobile }) => {
  const colorsAction = [
    {
      first: "#db253e",
      second: "#376667",
      third: "#50295f",
      forth: "#483d4f",
      text1: "#ffffff",
      text2: "#898993",
      text3: "#898993",
      text4: "#898993",
    },
    {
      first: "#8f1929",
      second: "#3ebec1",
      third: "#50295f",
      forth: "#483d4f",
      text1: "#898993",
      text2: "#ffffff",
      text3: "#898993",
      text4: "#898993",
    },
    {
      first: "#8f1929",
      second: "#376667",
      third: "#7e14a8",
      forth: "#483d4f",
      text1: "#898993",
      text2: "#898993",
      text3: "#ffffff",
      text4: "#898993",
    },
    {
      first: "#8f1929",
      second: "#376667",
      third: "#50295f",
      forth: "#a18cad",
      text1: "#898993",
      text2: "#898993",
      text3: "#898993",
      text4: "#ffffff",
    },
  ];
  const [state, setState] = useState({
    first: "#7A3947",
    second: "#376667",
    third: "#50295f",
    forth: "#483d4f",
    text1: "#898993",
    text2: "#898993",
    text3: "#898993",
    text4: "#898993",
  });
  const [contentItem, setContentItem] = useState(5);
  const active = (num) => {
    console.log(num);
    setState(colorsAction[num]);
    setContentItem(num);
  };
  const contentComponent = () => {
    if (contentItem == 5) {
      return (
        <div>
          <h3 className="title">Strategy and Planning</h3>
          <div className="content-container">
            <h4>Benefits</h4>
            <p className="content">
              Student profiles to drive applications and enrollments Strategies
              to increase market share Create metrics used to measure the
              strategy
            </p>
          </div>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Analyze marketing activities and success Evaluate & measure new
              opportunities to increase enrollments
            </p>
          </div>
          <div className="content-container">
            <h4>Duration</h4>
            <p className="content">
              Four weeks to evaluate marketing campaigns, explore local,
              regional, national opportunities, and create metrics and
              strategies to measure them
            </p>
          </div>
        </div>
      );
    }
    if (contentItem == 0) {
      return (
        <div>
          <h3 className="title">SITUATION ASSESSMENT</h3>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Create proprietary scorecard for financial, marketing, leadership,
              and competitive assessments Develop an in-depth SWOT analysis and
              plan of action
            </p>
          </div>
          <div className="content-container">
            <h4>Duration:</h4>
            <p className="content">
              Four weeks to meet with key personnel to gather information,
              create and refine scorecard, and present the findings
            </p>
          </div>
          <div className="content-container">
            <h4>Outcomes</h4>
            <p className="content">
              Comprehensive assessment spanning nine areas
              Strengths/Weaknesses/Opportunities/Threats (SWOT) analysis
              Executive level insights to advance recruitment efforts
            </p>
          </div>
        </div>
      );
    }
    if (contentItem == 1) {
      return (
        <div>
          <h3 className="title">ENROLLMENT MANAGEMENT FUNNEL</h3>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Assess current and past campaigns for effectiveness toward goals
              Measure brand in the marketplace Develop executable
              recommendations for new campaigns
            </p>
          </div>
          <div className="content-container">
            <h4>Duration:</h4>
            <p className="content">
              Three weeks to gather marketing campaigns and enrollment outcomes,
              determine brand effectiveness, and provide a new strategy to
              increase enrollments
            </p>
          </div>
          <div className="content-container">
            <h4>Outcomes</h4>
            <p className="content">
              Create marketing campaigns leading to new enrollments Brand
              equity, positioning, an awareness in the marketplace Campaigns
              tailored to the university and its offerings
            </p>
          </div>
        </div>
      );
    }
    if (contentItem == 2) {
      return (
        <div>
          <h3 className="title">COMPETITIVE INSIGHTS</h3>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Utilize proprietary technology to gather competitive data for
              traditional and digital media spending, buying, and timing of
              campaigns
            </p>
          </div>
          <div className="content-container">
            <h4>Duration:</h4>
            <p className="content">
              Four weeks to complete interviews, do competitive media research,
              and to develop a detailed plan
            </p>
          </div>
          <div className="content-container">
            <h4>Outcomes</h4>
            <p className="content">
              Hone student personas for messaging Provide intelligence about
              student demographics for the purpose of market segmentation to
              better understand future marketing investments
            </p>
          </div>
        </div>
      );
    }
    if (contentItem == 3) {
      return (
        <div>
          <h3 className="title">STUDENT PERSPECTIVES</h3>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Develop student survey to capture learning styles, preferences,
              priorities, concerns, etc. Create a platform for interactive
              response and data capture Analyze responses and create actionable
              interpretations
            </p>
          </div>
          <div className="content-container">
            <h4>Duration:</h4>
            <p className="content">
              Six weeks to develop the survey, collect information, analyze the
              data, and create a plan to reach future students
            </p>
          </div>
          <div className="content-container">
            <h4>Outcomes</h4>
            <p className="content">
              Understand students’ needs versus wants Provide insights into
              students’ learning preferences Understand habits and inclinations
              of students
            </p>
          </div>
        </div>
      );
    }
  };
  const centerSvgStyle = isMobile
    ? { zIndex: 100, top: 120, left: 120, width: 160, height: 160 }
    : { zIndex: 100, top: 230, left: 230, width: 160, height: 160 };
  return (
    <div className="svg-container row">
      <div className="svg-left col-12 col-xl-6">
        <div onClick={() => setContentItem(5)}>
          <div className="svg-left-title1">
            <h3>UNIVERSITY VERSION</h3>
          </div>
          <div className="svg-left-title2">
            <h3>STRATEGY</h3>
          </div>
        </div>
        <div className="svg-main">
          <svg id="center-svg" style={centerSvgStyle}>
            <circle cx="80" cy="80" r={isMobile ? "50" : "80"} fill="#fac544" />
          </svg>
          <div className="svg-center-text">
            <p>ENROLLED</p>
            <p>STUDENTS</p>
          </div>
          <div style={{ position: "relative" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 2 12 12"
              onClick={() => active(0)}
              id="svg-0"
            >
              <g fill={state.first}>
                <path d="M 9 2 L 12 8 L 6 14 L 0 8 L 3 2" />
              </g>
              <text x="3.5" y="6" fill={state.text1} className="svg-text">
                SITUATION
              </text>
              <text x="3" y="7.5" fill={state.text1} className="svg-text">
                ASSESSMENT
              </text>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              onClick={() => active(1)}
              id="svg-1"
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
              id="svg-2"
            >
              <g fill={state.third}>
                <path d="M 12 6 L 9 12 L 3 12 L 0 6 L 6 0" />
              </g>
              <text
                x={isMobile ? "3" : "2.5"}
                y="7.5"
                fill={state.text3}
                className="svg-text"
              >
                COMPETITIVE
              </text>
              <text
                x={isMobile ? "4" : "3.5"}
                y="9"
                fill={state.text3}
                className="svg-text"
              >
                INSIGHTS
              </text>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              onClick={() => active(3)}
              id="svg-3"
            >
              <g fill={state.forth}>
                <path d="M 12 6 L 6 12 L 0 9 L 0 3 L 6 0" />
              </g>
              <text
                x={isMobile ? "3" : "2.5"}
                y="5.5"
                fill={state.text4}
                className="svg-text"
              >
                STUDENT
              </text>
              <text
                x={isMobile ? "1.7" : "1"}
                y="7"
                fill={state.text4}
                className="svg-text"
              >
                PERSPECTIVES
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="svg-right col-12 col-xl-6">
        <h2>Strategic & Competitive Framework</h2>
        <p>Piecing together the enrollment puzzle</p>
        {contentComponent()}
      </div>
    </div>
  );
};
export default SvgStar;

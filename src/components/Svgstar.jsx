import { useState } from "react";
import "../App.css";
import mySvg from "../assets/images/Clickhere.svg";

const SvgStar = ({ isMobile }) => {
  // const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const colorsAction = [
    {
      first: "#db253e",
      second: "#456D78",
      third: "#4A3656",
      forth: "#535369",
      text1: "#ffffff",
      text2: "#898993",
      text3: "#898993",
      text4: "#898993",
    },
    {
      first: "#7A3948",
      second: "#3ebec1",
      third: "#4A3656",
      forth: "#535369",
      text1: "#898993",
      text2: "#ffffff",
      text3: "#898993",
      text4: "#898993",
    },
    {
      first: "#7A3948",
      second: "#456D78",
      third: "#7e14a8",
      forth: "#535369",
      text1: "#898993",
      text2: "#898993",
      text3: "#ffffff",
      text4: "#898993",
    },
    {
      first: "#7A3948",
      second: "#456D78",
      third: "#4A3656",
      forth: "#a18cad",
      text1: "#898993",
      text2: "#898993",
      text3: "#898993",
      text4: "#ffffff",
    },
    {
      first: "#7A3948",
      second: "#456D78",
      third: "#4A3656",
      forth: "#535369",
      text1: "#898993",
      text2: "#898993",
      text3: "#898993",
      text4: "#898993",
    },
  ];
  const [state, setState] = useState({
    first: "#7A3948",
    second: "#456D78",
    third: "#4A3656",
    forth: "#535369",
    text1: "#898993",
    text2: "#898993",
    text3: "#898993",
    text4: "#898993",
  });
  const [contentItem, setContentItem] = useState(5);
  const [showShadow, setShowShadow] = useState(true);
  const active = (num) => {
    setState(colorsAction[num]);
    setContentItem(num);
  };
  const contentComponent = () => {
    if (contentItem === 5) {
      return (
        <div>
          <h3 className="title" style={{ color: "#fac544" }}>
            Strategy and Planning
          </h3>
          <div className="content-container">
            <h4>Benefits</h4>
            <p className="content">
              Donor profile effectiveness to drive activations, cultivation,
              conversion, and value proposition Market expansion strategy to
              increase market share Metrics and measurement strategy.
            </p>
          </div>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Analyze NPO’s marketing efficiency and success and offer
              recommendations Evaluate market opportunities to increase donor
              rolls Gage the metrics and measurement driving contributions.
            </p>
          </div>
          <div className="content-container">
            <h4>Duration</h4>
            <p className="content">
              Example: 2 weeks to evaluate marketing campaigns 1 week to explore
              local market and/or regional expansion opportunities 3 days to
              review and suggest metric and measurement strategies
            </p>
          </div>
        </div>
      );
    }
    if (contentItem === 0) {
      return (
        <div>
          <h3 className="title" style={{ color: colorsAction[0].first }}>
            SITUATION ASSESSMENT
          </h3>
          <div className="content-container">
            <h4>Benefits</h4>
            <p className="content">
              Comprehensive analysis spanning 9 assessment areas Fact-based
              Strengths/ Opportunities/ Weaknesses/ Threats (SWOT) Executive
              level insights to advance long term/ high value donors
            </p>
          </div>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Use proprietary scorecard for financial, metrics, marketing,
              leadership, competitive assessments Develop a in-depth view for
              college’s SOWT Develop effective plan of action
            </p>
          </div>
          <div className="content-container">
            <h4>Duration</h4>
            <p className="content">
              Example: 3 days to refine proprietary scorecard 3 weeks to meet
              with various directors to gather scoring information 4 days to
              assemble findings and present them
            </p>
          </div>
        </div>
      );
    }
    if (contentItem === 1) {
      return (
        <div>
          <h3 className="title" style={{ color: colorsAction[1].second }}>
            NEW NAME FUNNEL MANAGEMENT
          </h3>
          <div className="content-container">
            <h4>Benefits</h4>
            <p className="content">
              Marketing campaigns to effective increase donations Brand equity,
              positioning, and awareness in the marketplace Campaign(s) tailored
              to different audiences to increase consumption and donations.
            </p>
          </div>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Assess current and past campaigns for effectiveness to
              contribution goals Measure NPO’s brand in the marketplace pointing
              to key prospects Develop executable recommendations.
            </p>
          </div>
          <div className="content-container">
            <h4>Duration</h4>
            <p className="content">
              Example: 5 days to gather marketing campaigns and donations
              outcomes 2 weeks to determine branding effectiveness with
              recommendations 3 days for brand rehabilitation strategy, if
              needed.
            </p>
          </div>
        </div>
      );
    }
    if (contentItem === 2) {
      return (
        <div>
          <h3 className="title" style={{ color: colorsAction[2].third }}>
            COMPETITIVE ADVANTAGE AND INSIGHTS
          </h3>
          <div className="content-container">
            <h4>Benefits</h4>
            <p className="content">
              Honed long term/ high value donor personas for messaging
              Intelligence about donors demographics Market Segmentation for
              effective donor roll marketing investments.
            </p>
          </div>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Utilize specialized tools to gather specific linear and digital
              media competitive spending, buying, and timing Competitive media
              research options: Claritas, Media Mark Research, Similar Web,
              comScore.
            </p>
          </div>
          <div className="content-container">
            <h4>Duration</h4>
            <p className="content">
              Example: 3 days to develop detailed plan for analysis 3 weeks for
              competitive media research and persona development.
            </p>
          </div>
        </div>
      );
    }
    if (contentItem === 3) {
      return (
        <div>
          <h3 className="title" style={{ color: colorsAction[3].forth }}>
            DONOR FUNNEL MANAGEMENT
          </h3>
          <div className="content-container">
            <h4>Benefits</h4>
            <p className="content">
              Understand Audience needs vs. wants Insights into audience
              listening and consumption preferences: Radio vs. Podcast vs.
              Mobile App Immerse into how audience listens, how they speak and
              their vernacular.
            </p>
          </div>
          <div className="content-container">
            <h4>Activities</h4>
            <p className="content">
              Develop NPO donor survey to capture: learning styles, preferences,
              highest priorities and concerns, etc. Create a platform for
              interactive response and data capture Analysis responses and
              actions.
            </p>
          </div>
          <div className="content-container">
            <h4>Duration</h4>
            <p className="content">
              Example: 2 weeks to develop Survey 2 weeks to collect information
              2 weeks to analyze the data into actionable undertakings.
            </p>
          </div>
        </div>
      );
    }
  };
  const centerSvgStyle = isMobile
    ? { zIndex: 100, top: 80, left: 80, width: 160, height: 160 }
    : { zIndex: 100, top: 230, left: 230, width: 160, height: 160 };
  return (
    <div className="svg-container row">
      <div
        className="svg-left col-12 col-xl-6"
        onClick={() => setShowShadow(false)}
      >
        <div
          style={{
            display: showShadow ? "flex" : "none",
          }}
          className="shadow-on-svg"
        >
          <div
            style={{
              height: "65%",
              width: "65%",
              backgroundImage: `url(${mySvg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        {isMobile && (
          <>
            <h2 className="svg-right-title">
              Strategic & Competitive Blueprint
            </h2>
            <p className="svg-right-title2">
              Piecing together the enrollment puzzle
            </p>
          </>
        )}
        <div
          onClick={() => {
            active(4);
            setContentItem(5);
          }}
          className="strategy-btn"
        >
          <div className="svg-left-title1">
            <h3 style={{ color: contentItem === 5 ? "#fac544" : "#85704B" }}>
              NON-PROFIT ORGANIZATION VISION
            </h3>
          </div>
          <div
            className="svg-left-title2"
            style={{
              backgroundColor: contentItem === 5 ? "#fac544" : "#85704B",
            }}
          >
            <h3>STRATEGY AND PLANNING</h3>
          </div>
        </div>
        <div className="svg-main">
          <svg id="center-svg" style={centerSvgStyle}>
            <circle cx="80" cy="80" r={isMobile ? "45" : "80"} fill="#fac544" />
          </svg>
          <div className="svg-center-text">
            <p style={{ color: "#000" }}>LONG TERM</p>
            <p style={{ color: "#000" }}>HIGHT VALUE</p>
            <p style={{ color: "#000" }}>DONOR</p>
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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                onClick={() => active(1)}
                id="svg-1"
              >
                <g fill={state.second} onClick={() => active(1)}>
                  <path d="M 12 3 L 12 9 L 6 12 L 0 6 L 6 0" />
                </g>
                <text x="5" y="5" fill={state.text2} className="svg-text">
                  NEW NAME
                </text>
                <text x="6" y="6.5" fill={state.text2} className="svg-text">
                  FUNNEL
                </text>
                <text x="4" y="8" fill={state.text2} className="svg-text">
                  MANAGEMENT
                </text>
              </svg>
            </div>

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
                x={isMobile ? "3.2" : "2.8"}
                y="9"
                fill={state.text3}
                className="svg-text"
              >
                ADVANTAGE
              </text>
              <text
                x={isMobile ? "3.4" : "3.2"}
                y="10.5"
                fill={state.text3}
                className="svg-text"
              >
                & INSIGHTS
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
                x={isMobile ? "1" : "1"}
                y="5.5"
                fill={state.text4}
                className="svg-text"
              >
                DONOR FUNNEL
              </text>
              <text
                x={isMobile ? "1.2" : "1"}
                y="7"
                fill={state.text4}
                className="svg-text"
              >
                MANAGEMENT
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="svg-right col-12 col-xl-6" data-aos="fade-left">
        {!isMobile && (
          <>
            <h2 className="svg-right-title">
              Strategic & Competitive Framework
            </h2>
            <p className="svg-right-title2">
              Piecing together the enrollment puzzle
            </p>
          </>
        )}

        {contentComponent()}
      </div>
    </div>
  );
};
export default SvgStar;

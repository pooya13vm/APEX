import "./App.css";
import SvgStar from "./components/Svgstar";
import num1 from "./assets/images/Group 116.png";
import num2 from "./assets/images/Group 115.png";
import num3 from "./assets/images/Group 113.png";
import num4 from "./assets/images/Group 114.png";
import polygon from "./assets/images/Polygon 1.png";
import quot1 from "./assets/images/Group 117.png";
import quot2 from "./assets/images/Group 118.png";
import play from "./assets/images/Group 119.png";
import logo1 from "./assets/images/Group 131.png";
import logo2 from "./assets/images/Group 132.png";
import logo3 from "./assets/images/Group 133.png";
import logo4 from "./assets/images/Group 134.png";
import logo5 from "./assets/images/Group 135.png";
import apex from "./assets/images/Group 110.png";

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
        <p>
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
          <img src={num1} className="img-fluid" />
          <img src={polygon} className="polygon img-fluid" />
          <img src={num2} className="img-fluid" />
          <img src={polygon} className="polygon img-fluid" />
          <img src={num3} className="img-fluid" />
          <img src={polygon} className="polygon img-fluid" />
          <img src={num4} className="img-fluid" />
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
      <div className="row quot-container">
        <div className="col-3 quot-img">
          <img src={quot1} className="img-fluid" />
        </div>
        <div className="col-7 quot-content">
          <h3>
            “For the last 4 years, Apex Media Partners has helped our team
            understand and execute the best audience targeting tactics and
            omni-platform placement strategy to launch our marketing creative as
            part of CSU’s annual plans.”
          </h3>
          <div className="content-detail-container">
            <p>Jenna Johnson, MBA</p>
            <span>Executive Director of Marketing and Communication</span>
          </div>
        </div>
      </div>
      <div className="row quot-container">
        <div className="col-7 quot-content">
          <h3>
            “From the beginning, Apex Media understood our metrics and the need
            to obtain new students through their channels that met our cost per
            enroll goals, and we were pleased with their results.”
          </h3>
          <div className="content-detail-container">
            <p>Dr. Steven Peterson</p>
            <span>Vice President for Online/Digital Learning</span>
          </div>
        </div>
        <div className="col-3 quot-img">
          <img src={quot2} className="img-fluid" />
          <img src={play} className="img-fluid" />
        </div>
      </div>
      <div className="logos-container">
        <img src={logo5} className="img-fluid" />
        <img src={logo4} className="img-fluid" />
        <img src={logo3} className="img-fluid" />
        <img src={logo2} className="img-fluid" />
        <img src={logo1} className="img-fluid" />
      </div>
      <footer className="footer">
        <div className="top_line">
          <div style={{ backgroundColor: "#db253e" }} className="line"></div>
          <div style={{ backgroundColor: "#fac544" }} className="line"></div>
          <div style={{ backgroundColor: "#3ebec1" }} className="line"></div>
          <div style={{ backgroundColor: "#3a394b" }} className="line"></div>
        </div>
        <div className="top-footer">
          <div className="top-footer-left">
            <h3>Get More Students Now!</h3>
            <h4>
              Your next start date is fast approaching, so the time to begin is
              now.
            </h4>
            <h5> Let us help you develop a plan to get more students now!</h5>
          </div>
          <div className="top-footer-right">
            <form>
              <input type="text" placeholder="Full Name*" />
              <input type="email" placeholder="Email*" />

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
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="footer-down">
          <img src={apex} className="img-fluid" />
          <div>
            <p>
              6929 E. Greenway PKWY, Suite 120, Scottsdale, AZ 85254 For
              inquiries please contact
            </p>
            <p>khartless@apexmedia.com or call 480.596.6320</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

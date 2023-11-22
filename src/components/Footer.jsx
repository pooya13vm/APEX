import apex from "../assets/images/Group 110.png";
import logo1 from "../assets/images/Group 144.svg";
// import logo2 from "../assets/images/Group 145.svg";
import logo3 from "../assets/images/Group 146.png";
import logo4 from "../assets/images/Group 147.png";
import logo5 from "../assets/images/Group 148.png";
import logo6 from "../assets/images/Group 145.png";
import yellowImage from "../assets/images/Screen Shot.png";
import { useForm } from "@formspree/react";

function Footer() {
  const [state, handleSubmit] = useForm("mqkvojpo");

  return (
    <footer className="footer">
      <div className="top-line-footer">
        <div style={{ backgroundColor: "#db253e" }} className="line"></div>
        <div style={{ backgroundColor: "#fac544" }} className="line"></div>
        <div style={{ backgroundColor: "#3ebec1" }} className="line"></div>
        <div style={{ backgroundColor: "#3a394b" }} className="line"></div>
      </div>
      <div className="footer-top-logo-container">
        <img src={logo1} />
        <img src={logo6} />
        <img src={logo3} />
        <img src={logo4} />
        <img src={logo5} />
      </div>
      <div className="footer-yellow-container">
        {/* <h3>Rise Above the Donation Slump</h3>
        <div>images</div> */}

        <img src={yellowImage} />
      </div>
      <div className="top-footer">
        <div className="top-footer-left">
          <h3>Get More From your Fundraising Efforts</h3>
          <h4>
            Your next start date is fast approaching, so the time to begin is
            now.
          </h4>
          <h5>
            {" "}
            Let us help you develop an effective and efficient fundraising plan!
          </h5>
        </div>
        <div className="top-footer-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name*"
              name="full name:"
              required
            />
            <input type="email" placeholder="Email*" name="email:" required />
            {/* <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /> */}

            <button
              type="submit"
              style={{
                width: 255,
                height: 63,
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#fac544",
                backgroundColor: "#3A394B",
                border: "none",
              }}
              // onClick={handleForm}
            >
              Submit
            </button>
            {state.succeeded && (
              <p
                style={{
                  color: "#db253de3",
                  textAlign: "left",
                }}
              >
                Thanks for joining!
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="footer-down">
        <img src={apex} className="img-fluid" />
        <div>
          <p>
            6929 E. Greenway PKWY, Suite 120, Scottsdale, AZ 85254 For inquiries
            please contact
          </p>
          <p>carrie@apexmedia.com or call 602.376.75777</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import apex from "../assets/images/Group 110.png";
import logo1 from "../assets/images/Group 144.svg";
// import logo2 from "../assets/images/Group 145.svg";
import logo3 from "../assets/images/Group 146.png";
import logo4 from "../assets/images/Group 147.png";
import logo5 from "../assets/images/Group 148.png";
import logo6 from "../assets/images/Group 145.png";
import yellowImage from "../assets/images/Screen Shot.png";
// import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

function Footer() {
  // const [state, handleSubmit] = useForm("mknlaeor");
  const [name, setName] = useState("pooya");
  const [email, setEmail] = useState("a@b.com");
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    const formspreeURL = "https://formspree.io/f/mknlaeor";
    fetch(formspreeURL, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Formspree response:", data);
        // Handle success or error response from Formspree
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });
  };

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
          <form
            // action="https://formsubmit.co/lucy_hoger@yahoo.com"
            // method="POST"
            onSubmit={handleForm}
          >
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
          <p>khartless@apexmedia.com or call 480.596.6320</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

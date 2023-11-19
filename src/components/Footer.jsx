import apex from "../assets/images/Group 110.png";
function Footer() {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="footer">
      <div className="top-line-footer">
        <div style={{ backgroundColor: "#db253e" }} className="line"></div>
        <div style={{ backgroundColor: "#fac544" }} className="line"></div>
        <div style={{ backgroundColor: "#3ebec1" }} className="line"></div>
        <div style={{ backgroundColor: "#3a394b" }} className="line"></div>
      </div>
      <div className="footer-top-logo-container"></div>
      <div className="footer-yellow-container"></div>
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
          <form
            action="https://formsubmit.co/lucy_hoger@yahoo.com"
            method="POST"
          >
            <input type="text" placeholder="Full Name*" name="full name:" />
            <input type="email" placeholder="Email*" name="Email:" />

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
              onClick={handleForm}
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

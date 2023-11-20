import logo from "../assets/images/Apex Logo.svg";
import "../App.css";
function Header() {
  return (
    <>
      <div className="top-menu">
        <img src={logo} />

        <div>
          <span>For inquiries please contact call</span>
          <span style={{ marginLeft: 10, fontSize: 24, fontWeight: "bold" }}>
            602.376.75777
          </span>
        </div>
      </div>

      <div className="header_image">
        <div className="top_line" data-aos="fade-right">
          <div style={{ backgroundColor: "#db253e" }} className="line"></div>
          <div style={{ backgroundColor: "#fac544" }} className="line"></div>
          <div style={{ backgroundColor: "#3ebec1" }} className="line"></div>
          <div style={{ backgroundColor: "#3a394b" }} className="line"></div>
        </div>
        <h1>RESPONSIVE FUNDRAISING!</h1>
        <p className="under-title-text">
          Apex Media has partnered with none-profit organizations for decades to
          take advantage of the changing fundraising efforts and behaviors.
        </p>
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
    </>
  );
}

export default Header;

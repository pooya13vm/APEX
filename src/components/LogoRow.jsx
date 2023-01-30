import logo1 from "../assets/images/Group 131.png";
import logo2 from "../assets/images/Group 132.png";
import logo3 from "../assets/images/Group 133.png";
import logo4 from "../assets/images/Group 134.png";
import logo5 from "../assets/images/Group 135.png";
function LogoRow() {
  return (
    <div className="logos-container">
      <img src={logo5} className="img-fluid" />
      <img src={logo4} className="img-fluid" />
      <img src={logo3} className="img-fluid" />
      <img src={logo2} className="img-fluid" />
      <img src={logo1} className="img-fluid" />
    </div>
  );
}

export default LogoRow;

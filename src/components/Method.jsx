import { useState } from "react";
import num1 from "../assets/images/Group 116.png";
import num2 from "../assets/images/Group 115.png";
import num3 from "../assets/images/Group 113.png";
import num4 from "../assets/images/Group 114.png";
import polygon from "../assets/images/Polygon 1.png";
import ModalScreen from "./Modal";

function Method() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="method-section-container row">
        <div className="method-section-left col-6" data-aos="fade-right">
          <img src={num1} className="img-fluid" />
          <img src={polygon} className="polygon img-fluid" />
          <img src={num2} className="img-fluid" />
          <img src={polygon} className="polygon img-fluid" />
          <img src={num3} className="img-fluid" />
          <img src={polygon} className="polygon img-fluid" />
          <img src={num4} className="img-fluid" />
        </div>

        <div className="col-6 method-right">
          <div className="method-section-right">
            <h3>OUR METHOD</h3>
            <p>
              Apex Media uses advanced, proprietary methods and technology to
              identify, locate, and connect with your ideal donor segment.
            </p>

            <p>
              We then utilize an omni-channel approach to actively engage your
              potential donors to turn them into long-term qualified people for
              your organizations.
            </p>

            {/* <button className="method-btn" onClick={() => setShow(true)}>
            Download Blueprint
          </button> */}
          </div>
        </div>
        <ModalScreen show={show} setShow={setShow} />
      </div>
      <div className="method-red-container">
        <p>NPO Trends</p>
        <p>TBD</p>
      </div>
    </>
  );
}

export default Method;

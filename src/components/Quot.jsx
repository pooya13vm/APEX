import { useState } from "react";
import quot1 from "../assets/images/Group 117.png";
import quot2 from "../assets/images/Group 118.png";
import play from "../assets/images/Group 119.png";
import { Modal } from "react-bootstrap";

function Quot() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row quot-container">
        <div className="col-3 quot-img">
          <img src={quot1} className="img-fluid" />
        </div>
        <div className="col-7 quot-content" data-aos="fade-left">
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
      <div className="row quot-container second-quot" data-aos="fade-bottom">
        <div className="col-7 quot-content" data-aos="fade-right">
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
          <img
            src={play}
            className="img-fluid play-video-img"
            onClick={handleShow}
            alt="youtube video PLAY"
          />
        </div>
      </div>
      <Modal show={show} onHide={handleClose} onClick={handleClose}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Tgob9XSod7Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
}

export default Quot;

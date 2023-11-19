import { useState } from "react";
import pdf from "../assets/documents/apex.pdf";
import ModalScreen from "./Modal";

function Slogan() {
  const [show, setShow] = useState(false);

  return (
    <>
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
      <div className="slogan-text" data-aos="fade-down-left">
        <h2>About Apex Media</h2>
        <p>
          Apex Media uses advanced, proprietary methods and technology to
          identify, locate, and content to create an ideal fundraising campaign.
        </p>
        <p>
          We then utilize an omnichannel approach to actively engage a community
          of charitable donors to engage with your cause.{" "}
        </p>
        <p>
          Across the years, We`ve adeptly embraced trends, serving as catalysts
          for our clients to realize their mission and forge a meaningful legacy
          in their community.
        </p>
      </div>
      <div className="slogan-image-container">
        <div className="slogan-image-item"></div>
        <div className="slogan-image-item">A</div>
        <div className="slogan-image-item"></div>
        <div className="slogan-image-item">P</div>
        <div className="slogan-image-item"></div>
        <div className="slogan-image-item">E</div>
        <div className="slogan-image-item"></div>
        <div className="slogan-image-item">X</div>
        <div className="slogan-image-item"></div>
      </div>
      <h3 className="slogan-second-title">
        building a legacy with our clients.
      </h3>
      <h3 className="slogan-second-title">together. one team. one goal.</h3>
      <div className="slogan-three-part-container">
        <span className="slogan-three-part-item">
          <p>HUNDREDS</p>
          <p>Of Clients Served</p>
        </span>
        <span className="slogan-three-part-item">
          <p>BILLIONS</p>
          <p>Of Clients Revenue Generated</p>
        </span>
        <span className="slogan-three-part-item">
          <p>1 MISSION</p>
          <p>Creating Powerful impact for Your Organization</p>
        </span>
      </div>
      <div className="slogan-last-text-container">
        <p>We are the "how" to your "why".</p>
        <p>Bold Initiatives. Fresh Perspective. Reliability you can trust.</p>
      </div>
      {/* <a className="center-child">
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
          onClick={() => setShow(true)}
        >
          Download Blueprint
        </button>
      </a> */}
      <ModalScreen show={show} setShow={setShow} />
    </>
  );
}

export default Slogan;

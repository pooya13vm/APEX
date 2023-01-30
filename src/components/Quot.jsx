import quot1 from "../assets/images/Group 117.png";
import quot2 from "../assets/images/Group 118.png";
import play from "../assets/images/Group 119.png";
function Quot() {
  return (
    <>
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
      <div className="row quot-container second-quot">
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
    </>
  );
}

export default Quot;

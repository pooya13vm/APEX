import image from "../assets/images/MaskGroup.png";
function OurValue() {
  return (
    <div className="ourValue-container">
      <div className="ourValue-item">
        <img src={image} alt="our value" style={{ marginBottom: 12 }} />
        <h3 style={{ color: "#000" }}>OUR VALUES</h3>
      </div>
      <div className="ourValue-item">
        <h3>CURIOSITY</h3>
        <p>
          We believe curiosity is the fuel for discovery, inquiry and learning.
          We ask: ‘what if? and why?’ to ensure we get the best possible
          solution for the outcome you are seeking. Having an open mind to new
          ways leads to new opportunities.
        </p>
      </div>
      <div className="ourValue-item">
        <h3>GENEROSITY</h3>
        <p>
          We take pride in our combined years of knowledge, expertise and
          passion when working with organizations to scale their mission. The
          true measure of generosity is how we share what we know with you. We
          call this going the extra mile
        </p>
      </div>
      <div className="ourValue-item">
        <h3>COURAGE</h3>
        <p>
          Doing what is easy is just that - easy! Instead of easy, we focus on
          what is right for your brand. With confident competence we embrace
          transformative change with your
        </p>
      </div>
    </div>
  );
}
export default OurValue;

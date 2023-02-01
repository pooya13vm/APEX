import pdf from "../assets/documents/apex.pdf";
function Slogan() {
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
        <p>
          Apex Media has partnered with universities for decades to face the
          challenge of declining enrollment
        </p>
      </div>
      <a
        className="center-child"
        href={pdf}
        download="APEX_EDU_BLUEPRINT_23.pdf"
      >
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
        >
          Download Blueprint
        </button>
      </a>
    </>
  );
}

export default Slogan;

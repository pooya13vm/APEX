import { Modal } from "react-bootstrap";
import "../App.css";
import pdf from "../assets/documents/apex.pdf";

const ModalScreen = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#EEEEEF",
          textAlign: "center",
          width: "max-content",
        }}
      >
        <h2
          style={{
            marginTop: 50,
            marginBottom: 25,
            fontWeight: 800,
            fontSize: 50,
            color: "#3a394b",
          }}
        >
          Get More Students Now!
        </h2>
        <h4
          style={{
            width: "fit-content",
            marginLeft: 75,
            marginRight: 75,
            fontSize: 28,
            fontWeight: 600,
            color: "#3a394b",
          }}
        >
          Submit the form below to download the blueprint*
        </h4>

        <form
          style={{ alignItems: "center" }}
          id="form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Full Name*"
            required
            style={{ width: 300, height: 63, marginTop: 30, paddingLeft: 20 }}
          />
          <input
            type="email"
            placeholder="Email*"
            required
            style={{ width: 300, height: 63, marginTop: 10, paddingLeft: 20 }}
          />
          <a href={pdf} download="APEX_EDU_BLUEPRINT_23.pdf">
            <button
              type="submit"
              style={{
                width: 300,
                height: 63,
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#fac544",
                backgroundColor: "#3A394B",
                border: "none",
                marginTop: 10,
                marginBottom: 50,
              }}
            >
              Submit
            </button>
          </a>
        </form>
      </div>
    </Modal>
  );
};
export default ModalScreen;

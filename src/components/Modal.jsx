import { Modal } from "react-bootstrap";
import "../App.css";
import { saveAs } from "file-saver";

const ModalScreen = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  function handleSubmit(e) {
    try {
      saveAs(
        "https://pdfhost.io/v/szs3nmqhd_APEX_EDU_Brochure_AE_R2",
        "file.pdf"
      );
      e.preventDefault();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{
        textAlign: "center",
      }}
    >
      <div className="form-modal-container">
        <h2>Get More Students Now!</h2>
        <h4>Submit the form below to download the blueprint*</h4>

        <form
          style={{ alignItems: "center" }}
          className="modal-form"
          action="https://formsubmit.co/lucy_hoger@yahoo.com"
          method="POST"
        >
          <input
            type="text"
            name="Full name:"
            placeholder="Full Name*"
            required
          />
          <input type="email" name="Email:" placeholder="Email*" required />
          <button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};
export default ModalScreen;

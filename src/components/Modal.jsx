import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../App.css";
import pdf from "../assets/documents/apex.pdf";
import { saveAs } from "file-saver";

const ModalScreen = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  const [pdfData, setPdfData] = useState(null);
  const handleDownload = () => {
    const pdfFile = new Blob(["../assets/documents/apex.pdf"], {
      type: "application/pdf",
    });
    saveAs(pdfFile, "file.pdf");
  };
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
          // onSubmit={handleSubmit}
          action="https://formsubmit.co/pooya13vm@gmail.com"
          method="POST"
        >
          <input
            type="text"
            name="Full name:"
            placeholder="Full Name*"
            required
          />
          <input type="email" name="Email:" placeholder="Email*" required />
          <a
            href={pdf}
            download="APEX_EDU_BLUEPRINT_23.pdf"
            style={{ margin: 100 }}
          >
            hello
          </a>
          <button type="submit" onClick={() => handleDownload()}>
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};
export default ModalScreen;

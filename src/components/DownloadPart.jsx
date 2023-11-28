import { useEffect } from "react";
import image from "../assets/images/Screenshot.png";
import { useForm } from "@formspree/react";
import pdf from "../assets/documents/Apex_NPO_Trends_AE_191523_V4.pdf";

function DownloadPart() {
  const [state, handleSubmit] = useForm("mqkvojpo");
  useEffect(() => {
    if (state.succeeded) {
      window.location.href = pdf;
    }
  }, [state]);
  return (
    <div className="downloadPart-container">
      <div className="downloadPart-image-container">
        <img src={image} />
      </div>
      <div className="downloadPart-form-container">
        <form onSubmit={handleSubmit}>
          <h3 className="downloadPart-title">
            Unlock the 7 Trends Post-COVID and the AI Revolution.
          </h3>
          <p>
            <span style={{ fontWeight: "bold", color: "#db253de3" }}>
              Bonus:{"  "}
            </span>
            <span style={{ fontWeight: "600" }}>Expert insights included.</span>
          </p>
          <input placeholder="First name*" type="text" name="name" required />
          <input
            name="email"
            placeholder="Email*"
            type="email"
            style={{ marginTop: 16, marginBottom: 24 }}
            required
          />
          <button
            type="submit"
            style={{
              width: 255,
              height: 63,
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#fac544",
              backgroundColor: "#3A394B",
              border: "none",
            }}
            disabled={state.submitting}
          >
            Download
          </button>
        </form>
      </div>
    </div>
  );
}
export default DownloadPart;

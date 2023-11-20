import React, { useState } from "react";
import image from "../assets/images/Screenshot.png";

function DownloadPart() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    updateButtonState(value, email);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    updateButtonState(name, value);
  };

  const updateButtonState = (nameValue, emailValue) => {
    // Enable the button if the name is filled and the email contains '@' and '.'
    setButtonEnabled(
      nameValue.trim() !== "" &&
        emailValue.includes("@") &&
        emailValue.includes(".")
    );
  };
  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted with value:", inputValue);
  };
  return (
    <div className="downloadPart-container">
      <div className="downloadPart-image-container">
        <img src={image} />
      </div>
      <div className="downloadPart-form-container">
        <form>
          <h3 className="downloadPart-title">
            Unlock the 7 Trends Post-COVID and the AI Revolution.
          </h3>
          <p>
            <span style={{ fontWeight: "bold", color: "#db253de3" }}>
              Bonus:{"  "}
            </span>
            <span style={{ fontWeight: "600" }}>Export insights included.</span>
          </p>
          <input
            placeholder="Full Name*"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <input
            placeholder="Email*"
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{ marginTop: 16, marginBottom: 24 }}
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isButtonEnabled}
            style={{
              width: 255,
              height: 63,
              fontSize: "1.3rem",
              fontWeight: 700,
              color: isButtonEnabled ? "#fac544" : "#fac54499",
              backgroundColor: isButtonEnabled ? "#3A394B" : "#3A394B99",
              border: "none",
            }}
          >
            Download
          </button>
        </form>
      </div>
    </div>
  );
}
export default DownloadPart;

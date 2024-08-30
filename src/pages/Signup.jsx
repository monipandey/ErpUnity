import React, { useState } from "react";
import "./signup.css"; // Adjust the path as necessary

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentStep === 4) {
      alert("Your Form Successfully Signed up");
      window.location.reload();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="page slide-page">
            <div className="title">Basic Info:</div>
            <div className="field">
              <div className="label">First Name</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Last Name</div>
              <input type="text" />
            </div>
            <div className="field">
              <button className="next" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="page">
            <div className="title">Contact Info:</div>
            <div className="field">
              <div className="label">Email Address</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Phone Number</div>
              <input type="number" />
            </div>
            <div className="field btns">
              <button className="prev" onClick={prevStep}>
                Previous
              </button>
              <button className="next" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="page">
            <div className="title">Date of Birth:</div>
            <div className="field">
              <div className="label">Date</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Gender</div>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field btns">
              <button className="prev" onClick={prevStep}>
                Previous
              </button>
              <button className="next" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="page">
            <div className="title">Login Details:</div>
            <div className="field">
              <div className="label">Username</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Password</div>
              <input type="password" />
            </div>
            <div className="field btns">
              <button className="prev" onClick={prevStep}>
                Previous
              </button>
              <button className="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header>Signup Form</header>
      <div className="progress-bar">
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
          <p>Name</p>
          <div className="bullet">
            <span>1</span>
          </div>
          <div className="check fas fa-check"></div>
        </div>
        <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
          <p>Contact</p>
          <div className="bullet">
            <span>2</span>
          </div>
          <div className="check fas fa-check"></div>
        </div>
        <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
          <p>Birth</p>
          <div className="bullet">
            <span>3</span>
          </div>
          <div className="check fas fa-check"></div>
        </div>
        <div className={`step ${currentStep === 4 ? "active" : ""}`}>
          <p>Submit</p>
          <div className="bullet">
            <span>4</span>
          </div>
          <div className="check fas fa-check"></div>
        </div>
      </div>
      <div className="form-outer">{renderStep()}</div>
    </div>
  );
};

export default Signup;

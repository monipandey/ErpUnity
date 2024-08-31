import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your Form Successfully Signed up");
    // Optionally handle form submission logic here
  };

  return (
    <div className="container-signup">
    <div className="container">
      <header>Signup Form</header>
      <div className="progress-bar">
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
          <p>Name</p>
          <div className="bullet"><span>1</span></div>
          <div className="check fas fa-check"></div>
        </div>
        <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
          <p>Contact</p>
          <div className="bullet"><span>2</span></div>
          <div className="check fas fa-check"></div>
        </div>
        <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
          <p>Birth</p>
          <div className="bullet"><span>3</span></div>
          <div className="check fas fa-check"></div>
        </div>
        <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
          <p>Submit</p>
          <div className="bullet"><span>4</span></div>
          <div className="check fas fa-check"></div>
        </div>
      </div>

      <div className="form-outer">
        <form onSubmit={handleSubmit}>
          <div className={`page ${currentStep === 1 ? "active" : ""}`}>
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
              <button type="button" className="firstNext next" onClick={nextStep}>Next</button>
            </div>
          </div>

          <div className={`page ${currentStep === 2 ? "active" : ""}`}>
            <div className="title">Contact Info:</div>
            <div className="field">
              <div className="label">Email Address</div>
              <input type="email" />
            </div>
            <div className="field">
              <div className="label">Phone Number</div>
              <input type="tel" />
            </div>
            <div className="field btns">
              <button type="button" className="prev-1 prev" onClick={prevStep}>Previous</button>
              <button type="button" className="next-1 next" onClick={nextStep}>Next</button>
            </div>
          </div>

          <div className={`page ${currentStep === 3 ? "active" : ""}`}>
            <div className="title">Date of Birth:</div>
            <div className="field">
              <div className="label">Date</div>
              <input type="date" />
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
              <button type="button" className="prev-2 prev" onClick={prevStep}>Previous</button>
              <button type="button" className="next-2 next" onClick={nextStep}>Next</button>
            </div>
          </div>

          <div className={`page ${currentStep === 4 ? "active" : ""}`}>
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
              <button type="button" className="prev-3 prev" onClick={prevStep}>Previous</button>
              <button type="submit" className="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;

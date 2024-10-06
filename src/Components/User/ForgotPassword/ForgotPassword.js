import React, { useState } from "react";
import "../../../Assets/Css/User/ForgotPassword/forgotPassword.css";
import { useNavigation } from "../../../Utils/Functions/Navigation/Navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  let navigateTo = useNavigation();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Password reset link sent to:", email);
      // Code to send password reset link here
    }
  };

  return (
    <div className="forgotPassword">
      <div className="form-container">
        <div className="form-box">
          <h1>Forgot Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <span className="required">*</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="button-container">
              <button type="submit" className="submit-btn">
                Send Reset Link
              </button>
            </div>
          </form>

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div>
              Back to{" "}
              <span className="cursor" onClick={() => navigateTo("/sign-in")}>
                Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

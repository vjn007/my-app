import React, { useState } from "react";
import "../../../Assets/Css/User/ResetPassword/resetPassword.css";
import { useNavigation } from "../../../Utils/Functions/Navigation/Navigation";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  let navigateTo = useNavigation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      console.log("Password successfully reset:", formData.newPassword);
      // Code to handle password reset here
      navigateTo("/sign-in");
    }
  };

  return (
    <div className="resetPassword">
      <div className="form-container">
        <div className="form-box">
          <h1>Reset Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>New Password</label>
              <span className="required">*</span>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.newPassword && (
                <p className="error">{errors.newPassword}</p>
              )}
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <span className="required">*</span>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="button-container">
              <button type="submit" className="submit-btn">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

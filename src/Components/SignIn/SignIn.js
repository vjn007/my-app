import React, { useState } from "react";
import "../../Assets/Css/SignIn/signIn.css";
import { useNavigation } from "../../Utils/Functions/Navigation/Navigation";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
      navigateTo("/dashboard");
      console.log("Sign In Successful:", formData);
    }
  };

  return (
    <div className="signIn">
      <div className="form-container">
        <div className="form-box">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <span className="required">*</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <span className="required">*</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="forgot-password">
              <span
                onClick={() => navigateTo("/forgot-password")}
                className="forgot-link"
              >
                Forgot Password?
              </span>
            </div>

            <div className="button-container">
              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div>
              Don't have an account?{" "}
              <span className="cursor" onClick={() => navigateTo("/sign-up")}>
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

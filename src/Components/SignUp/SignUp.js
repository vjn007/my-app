import React, { useState } from "react";
import "../../Assets/Css/SignUp/signUp.css";
import { useNavigation } from "../../Utils/Functions/Navigation/Navigation";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    image: "",
    email: "",
    password: "",
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

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number is invalid";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date Of Birth is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select Gender";
    }

    if (!formData.image) {
      newErrors.image = "Image is required";
    }

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

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    } else if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
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
      navigateTo("/sign-in");
      console.log("Sign Up Successful:", formData);
    }
  };

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form-box">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <label>First Name</label>
                <span className="required">*</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.firstName && (
                  <p className="error">{errors.firstName}</p>
                )}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <label>Last Name</label>
                <span className="required">*</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <label>Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <label>Date Of Birth</label>
                <span className="required">*</span>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.dateOfBirth && (
                  <p className="error">{errors.dateOfBirth}</p>
                )}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <label>Phone Number</label>
                <span className="required">*</span>
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.phoneNumber && (
                  <p className="error">{errors.phoneNumber}</p>
                )}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
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

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <label>Gender</label>
                <span className="required">*</span>
                <div className="d-flex justify-content-around align-items-center">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                  </label>
                  Male
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                  </label>
                  Female
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                    />
                  </label>
                  Other
                </div>
                {errors.gender && <p className="error mt-2">{errors.gender}</p>}
              </div>

              <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <label>Image</label>
                <span className="required">*</span>
                <input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                />
                {errors.image && <p className="error">{errors.image}</p>}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
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

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
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
            </div>
          </form>

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div>
              Click Here To{" "}
              <span className="cursor" onClick={() => navigateTo("/sign-in")}>
                Sign In
              </span>
            </div>
            <div>
              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

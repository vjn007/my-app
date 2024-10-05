import React, { useState } from "react";
import "../../Assets/Css/SignUp/signUp.css";
import { useNavigation } from "../../Utils/Functions/Navigation/Navigation";

const SignUp = () => {
    // Single state object to handle all form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
        image: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    let navigateTo = useNavigation();

    // Handle input change for all fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validation logic
    const validateForm = () => {
        const newErrors = {};

        // First Name validation
        if (!formData.firstName) {
            newErrors.firstName = 'First Name is required';
        }

        // Last Name validation
        if (!formData.lastName) {
            newErrors.lastName = 'Last Name is required';
        }

        // Phone Number Validation
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone Number is required';
        }

        //Date Of Birth validation
        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = 'Date Of Birth is required';
        }

        // Gender validation
        if (!formData.gender) {
            newErrors.gender = 'Please Select Gender';
        }

        //image validation
        if (!formData.image) {
            newErrors.image = 'Image is required';
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Confirm Password validation
        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match';
        } else if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        }

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Sign Up Successful:', formData);
            // Add your sign-up logic here
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
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <p className="error">{errors.firstName}</p>}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
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
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <label>Date Of Birth</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                />
                                {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <label>Phone Number</label>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                                {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <label>Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                />
                                {errors.gender && <p className="error">{errors.gender}</p>}
                            </div>
                            <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
                                <label>Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                />
                                {errors.image && <p className="error">{errors.image}</p>}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <button type="submit" className="submit-btn">Sign Up</button>
                            </div>
                        </div>
                    </form>

                    <div className="mt-4">
                        Click Here To <span className="cursor" onClick={() => navigateTo("/sign-in")}>Sign In</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

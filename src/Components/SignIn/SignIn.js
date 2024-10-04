import React, { useState } from "react";
import "../../Assets/Css/SignIn/signIn.css";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        // Email validation
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        // Password validation
        if (!password) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Sign In Successful:', { email, password });
            // Add your sign-in logic here
        }
    };

    return (
        <>
            <div className="signIn">
                <div className="form-container">
                    <div className="form-box">
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}

                            <button type="submit" className="submit-btn">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
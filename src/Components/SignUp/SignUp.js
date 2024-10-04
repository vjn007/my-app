import React, { useState } from "react";
import "../../Assets/Css/SignUp/signUp.css";
import { useNavigation } from "../../Utils/Functions/Navigation/Navigation";

const SignUp = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    let navigateTo = useNavigation();

    const validateForm = () => {
        const newErrors = {};
        // FirstName validation
        if (!firstName) {
            newErrors.firstName = 'First Name is required';
        }
        // LastName validation
        if (!lastName) {
            newErrors.lastName = 'Last Name is required';
        }
        // Email validation
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        // Password validation
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        // Confirm password validation
        if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Passwords do not match';
        } else if( !confirmPassword){
            newErrors.password = 'Confirm Password is required';

        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Sign Up Successful:', { email, password });
            // Add your sign-up logic here
        }
    };

    return (
        <>
        <div className="signUp">
        <div className="form-container">
            <div className="form-box">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}

                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && <p className="error">{errors.last}</p>}

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
                    
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
                <div className="mt-4">Clcik Here To <span className="cursor" onClick={(() => navigateTo("/sign-in"))}>Sign In</span></div>
            </div>
        </div>
        </div>
        </>
    );
};

export default SignUp;
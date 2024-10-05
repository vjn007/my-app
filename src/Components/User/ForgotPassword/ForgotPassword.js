import React from "react";
import "../../../Assets/Css/User/ForgotPassword/forgotPassword.css";

const ForgotPassword = () => {
    return (
        <>
            <div className="forgotPassword">
                <div className="form-container">
                    <div className="form-box">
                        <h1>Forgot Password</h1>
                        <form>
                            <input
                                type="email"
                                placeholder="Email"
                            />

                            <button type="submit" className="submit-btn">Send Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
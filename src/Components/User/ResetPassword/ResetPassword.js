import React from "react";
import "../../../Assets/Css/User/ResetPassword/resetPassword.css";

const ResetPassword = () => {
    return (
        <>
        <div className="resetPassword">
        <div className="form-container">
                    <div className="form-box">
                        <h1>Reset Password</h1>
                        <form>
                            <input
                                type="password"
                                placeholder="Password"
                            />
                            <input
                                type="text"
                                placeholder="Confirm Password"
                            />
                            <input
                                type="number"
                                placeholder="PIN"
                            />

                            <button type="submit" className="submit-btn">Reset Passowrd</button>
                        </form>
                    </div>
                </div>
        </div>
        </>
    );
};

export default ResetPassword;
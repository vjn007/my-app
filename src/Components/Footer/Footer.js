import React from 'react';
import {useNavigation} from "../../Utils/Functions/Navigation/Navigation";


const Footer = () => {
    const navigateTo = useNavigation();

    return (
        <>
        <div className='footer'>
            <footer className="bg-success text-white mt-5 py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center text-md-left mb-3 mb-md-0">
                            <h5 className='cursor' onClick={() => {navigateTo("/home")}}>My App</h5>
                            <p>© 2024 All Rights Reserved</p>
                        </div>
                        <div className="col-md-4 text-center mb-3 mb-md-0">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><span className="text-white cursor" onClick={() => {navigateTo("/home")}}>Home</span></li>
                                <li><span className="text-white cursor" onClick={() => {navigateTo("/sign-in")}}>Sign In</span></li>
                                <li><span className="text-white cursor" onClick={() => {navigateTo("/sign-up")}}>Sign Up</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center text-md-right">
                            <h5>Follow Us</h5>
                            <span className="text-white"><i className="fa-brands fa-facebook"></i></span>
                            <span className="text-white"><i className="fa-brands fa-twitter"></i></span>
                            <span className="text-white"><i className="fa-brands fa-instagram"></i></span>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </>
    );
};

export default Footer;

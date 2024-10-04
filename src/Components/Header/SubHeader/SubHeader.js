// src > Components > Header > SubHeader > SubHeader.js

import React, { useState } from "react";
import "../../../Assets/Css/Header/SubHeader/subHeader.css";

const SubHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="subHeader">
                <header>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <nav className="navbar navbar-expand-lg container-fluid">
                        <span className="navbar-brand text-white">
                            Welcome User
                        </span>
                        <button
                            className="navbar-toggler HeaderTogglerButton"
                            type="button"
                            onClick={toggleMenu}
                            aria-controls="navbarResponsive"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon Headertoggler"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarResponsive">
                            <div>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Dashboard</span>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Profile</span>
                                        </span>
                                    </li>
                                    {/* <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Brands</span>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Products</span>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Wishlist</span>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Cart</span>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Payments</span>
                                        </span>
                                    </li> */}
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Notifications</span>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Settings</span>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            <span className="text-white">Logout</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                </header>
            </div>
        </>
    );
};

export default SubHeader;
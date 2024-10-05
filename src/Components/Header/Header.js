// src > Components > Header > Header.js

import React, { useState } from "react";
import { useNavigation } from "../../Utils/Functions/Navigation/Navigation";
import "../../Assets/Css/Header/header.css";
import HeaderContent from "./HeaderContent/HeaderContent";

const Header = () => {
    const navigateTo = useNavigation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="header">
                <header>
                    <nav className="navbar navbar-expand-lg container">
                        <span className="navbar-brand" onClick={() => navigateTo("/")}>
                            My App
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
                            <div className="ms-auto">
                                <HeaderContent />
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
};

export default Header;

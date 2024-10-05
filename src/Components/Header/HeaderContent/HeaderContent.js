// src > Components > Header > HeaderContent > HeaderContent.js

import React from "react";
import { useNavigation } from "../../../Utils/Functions/Navigation/Navigation";

const HeaderContent = () => {
    const navigateTo = useNavigation();

    return (
        <>
            <div className="headerContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="nav-link">
                            <span className="" onClick={() => navigateTo("/home")}>Home</span>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">
                            <span className="" onClick={() => navigateTo("/sign-in")}>Sign In</span>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">
                            <span className="" onClick={() => navigateTo("/sign-up")}>Sign Up</span>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HeaderContent;
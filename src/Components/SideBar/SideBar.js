// src > Components > Sidebar > SideBar.js

import React, { useState } from "react";
import "../../Assets/Css/SideBar/sideBar.css";
import { useNavigation } from "../../Utils/Functions/Navigation/Navigation";

const Sidebar = () => {
  const navigateTo = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  // const [isPinned, setIsPinned] = useState(false); // State to pin the sidebar

  const toggleSidebar = () => {
    // if (!isPinned) {
    setIsOpen(!isOpen);
    // }
  };

  const handleItemClick = (path) => {
    navigateTo(path);
    // if (!isPinned) {
    setIsOpen(false); // Close sidebar after navigation if not pinned
    // }
  };

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        {/* <div className="pin-sidebar">
<label>
<input
type="checkbox"
checked={isPinned}
onChange={(e) => setIsPinned(e.target.checked)}
/>
Keep Sidebar Open
</label>
</div> */}
        <ul className="sidebar-menu">
          <li onClick={() => handleItemClick("/home")}><span>Home</span></li>
          <li onClick={() => handleItemClick("/sign-in")}><span>Sign In</span></li>
          <li onClick={() => handleItemClick("/sign-up")}><span>Sign Up</span></li>
        </ul>
      </div>
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={toggleSidebar}></div>
      <button className="menu-btn" onClick={toggleSidebar}>
        {!isOpen ? <span className=""><i className="fa fa-bars"></i></span> : ""}
      </button>
    </div>
  );
};

export default Sidebar;

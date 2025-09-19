import { useState } from "react"; 
import "./navbar.scss";
import streamflixLogo from "./streamflix-logo.png";
import image from "./image.jpg";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src={streamflixLogo} alt="streaming" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <MdOutlineSearch className="icon" />
            <span>KID</span>
            <IoIosNotificationsOutline className="icon" />
            <img src={image} alt="user" />
            <div className="profile">
              <IoMdArrowDropdown className="icon" />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};
export default Navbar;

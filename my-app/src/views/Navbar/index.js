import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { social } from "./social";
import logo from "../../images/logo.png";
import { NavItem, NavLink } from "reactstrap";
import "./navbar.css";

const Navbar = (props) => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <NavItem className="link-btn">
              <NavLink
                onClick={() => {
                  props.setPage(0);
                }}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem className="link-btn">
              <NavLink
                onClick={() => {
                  props.setPage(1);
                }}
              >
                Booking System
              </NavLink>
            </NavItem>
            <NavItem className="link-btn">
              <NavLink
                onClick={() => {
                  props.setPage(3);
                }}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem className="link-btn">
              <NavLink href="https://github.com/GaryChen513/Seatify_2022">
                GitHub
              </NavLink>
            </NavItem>
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

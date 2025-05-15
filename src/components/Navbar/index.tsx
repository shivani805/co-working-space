import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/svgs/logo.svg";
import { ReactComponent as CallSVG } from "../../assets/svgs/call.svg";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <LogoSVG />
      </div>
      <div className="call-icon">
        <CallSVG />
      </div>
    </div>
  );
};

export default Navbar;

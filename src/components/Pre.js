import React from "react";
import { FaUserSecret } from "react-icons/fa";
import "./Pre.css";

function Pre() {
  return (
    <div className="preloader">
      <FaUserSecret className="preloader-icon" />
      <div className="preloader-text">
      Parsing   <span className="dots"></span>
      </div>
    </div>
  );
}

export default Pre;

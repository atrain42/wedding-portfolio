import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

import "./Dropdown.css";

const Dropdown = () => {
  const [text, setText] = useState("");

  const closeDropdown = () => {
    setText("");
  };

  const showLinks = () => {
    if (!text) {
      setText(() => {
        return (
          <div className="dropdownOptions">
            <Link to="/about" onClick={closeDropdown} className="dropdownLink">
              About
            </Link>
            <Link
              to="/privacy"
              onClick={closeDropdown}
              className="dropdownLink"
            >
              Privacy
            </Link>
            <Link to="/steps" onClick={closeDropdown} className="dropdownLink">
              Steps
            </Link>
          </div>
        );
      });
    } else {
      setText("");
    }
  };

  return (
    <div className="dropdown">
      <button onClick={showLinks}>
        Portfolio <AiFillCaretDown />
      </button>
      <div>{text}</div>
    </div>
  );
};

export default Dropdown;

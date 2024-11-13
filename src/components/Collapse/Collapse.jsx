import React, { useState } from "react";
import "./_collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse_dropdown_container ${isOpen ? "opened" : ""}`}>
      <div className="collapse_dropdown_title">
        <h1 className="dropdown_title">{title}</h1>
        <span onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>
      </div>
      <div className="collapse_dropdown_content">
        {Array.isArray(content) ? (
          <ul className="dropdown-list">
            {content.map((item, index) => (
              <li key={index} className="dropdown-list-item">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="dropdown-content">{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;

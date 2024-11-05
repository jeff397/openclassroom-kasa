import React, { useState } from 'react';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const display = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse_dropdown_container">
            <div className="collapse_dropdown_title">
                <h1 className='dropdown_title'>{title}</h1>
                <span onClick={display}>
                    {isOpen ? (
                        <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                        <i className="fa-solid fa-chevron-down"></i>
                    )}
                </span>
            </div>
            {isOpen && (
                <div className="collapse_dropdown_content">
                    <p className='dropdown-content'>{content}</p>
                </div>
            )}
        </div>
    );
}

export default Collapse;

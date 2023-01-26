import React from 'react';
import './modal.css';

const Assignment = ({ children, show, onClose }) => {
    return (
        <>
            {show && (
                <div className="modal">

                    <div className="modal_content">
                        <div className="modal_header">
                            <button onClick={onClose}>
                                X
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Assignment;
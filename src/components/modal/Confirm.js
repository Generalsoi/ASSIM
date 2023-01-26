import React from 'react';
import './modal.css';

const Confirm = ({ children, show, onClose }) => {
    return (
        <>
            {show && (
                <div className="modal">

                    <div className="modal_content">
                        <div className="modal_header">
                            <button className="modal_close" onClick={onClose}>
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

export default Confirm;
import React from 'react';
import './marketplace.modal.css';

const Modal = ({ show, onClose, onBuy, crate }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Crate Details</h2>
                <p>Price: {crate.price}</p>
                <div className="buttons">
                <button onClick={onBuy} className='buy'>Buy</button>
                <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
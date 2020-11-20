import React from 'react'
import './modal.css'

export const Modal = ({ showModal, setShowModal, children }) => {

    return (
        <div className={showModal ? "modal-overlay active" : "modal-overlay"} onClick={() => setShowModal(false)}>
            <div className={showModal ? "modal-content active" : "modal-content"} onClick={(e) => e.stopPropagation()}>
                {children}
                <button className="modal-btn">ok</button>
                <button className="modal-btn" onClick={() => setShowModal(false)}>cancel</button>
            </div>
        </div>
    )
}
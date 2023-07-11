import React from "react";
import { Button, Modal } from "@mui/material";
import Login from "../Login/Login";
import './LoginModal.css'

function LoginModal({ open, onClose}) {
    return(
        <Modal open={open} onClose={onClose} className="login-modal">
            <div className="modal-content">
                <Login />
            </div>
        </Modal>
    )
}

export default LoginModal;
import React from "react";
import './styles.css';
import {Column, Row} from "../grid";

const Modal = ({show, setShow, children})=> {
    const close = ()=> setShow(false);

    return (
        <div className={show ? 'modal' : 'modal close'}>
            <div className="modal-content">
                <Row>
                    <Column>
                        <span className="close-button" onClick={close}>&times;</span>
                        {children}
                    </Column>
                </Row>
            </div>
        </div>
    );
}

export default Modal;
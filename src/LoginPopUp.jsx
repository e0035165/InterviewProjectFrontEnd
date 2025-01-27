
import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Modal from "./Modal";

function LoginPopUp() 
{
    const [modal, setModal] = useState(false);
    const [login, setLogin] = useState(false);
    const [success, setSuccessLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toggleModal = () => {
        console.log(modal);
        setModal(!modal);
    };

    

    const Submission = (event) => {
        event.preventDefault();
        
    }




    return (
        <>
            <div>
                <button className="open-modal-btn" onClick={ toggleModal }>Sign In</button>
            </div>
            
            {
                modal &&
                <Modal closeModal={ toggleModal } Submission={Submission} />
            }


            
        </>
        

    );
};

export default LoginPopUp;
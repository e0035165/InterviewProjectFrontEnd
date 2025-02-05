import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function PaymentFailure() {

    const GoBackToHomePage = (e) =>{
        e.preventDefault();

    }

    const GoPackToPaymentPage=(e)=>{
        e.preventDefault();

    }

    return(
        <div class="container">
            <div class="overlay">
                <h2> Payment Failure</h2>
                <button type="submit" id="HomePage" onClick={GoBackToHomePage}>Homepage</button>
                <button type="submit" id="PaymentPage" onClick={GoPackToPaymentPage}>Payment-Page</button>
            </div>
        </div>

    );
}

export default PaymentFailure;
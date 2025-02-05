import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useSearchParams } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function PaymentSuccess() {
    const [searchParams] = useSearchParams();
    const paymentId = searchParams.get("paymentId");
    const PayerID = searchParams.get("PayerID");
    const [link, setLink] = useState('');

    useEffect(
        ()=>{
            axios.get("http://localhost:8220/v1/payment/success?paymentId="+paymentId+"&PayerId="+PayerID)
            .then((response)=>{
                setLink(response.data);
                console.log(link);
            })
            .catch((error)=> {
                console.log(error);
                setLink(error);
            });
        },[]);

    const GoBackToHomePage = (e) =>{
        e.preventDefault();

    }

    const GoPackToPaymentPage=(e)=>{
        e.preventDefault();

    }

    return(
        <div class="container">
            <div class="overlay">
                <h2> Payment successful</h2>
                <button type="submit" id="HomePage" onClick={GoBackToHomePage}>Homepage</button>
                <button type="submit" id="PaymentPage" onClick={GoPackToPaymentPage}>Payment-Page</button>
            </div>
        </div>

    );
}

export default PaymentSuccess;
import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";




function PaymentFrontPage() {
    const [payment, setPayment] = useState('Not attempted');
    const [total, setTotal] = useState(0.00);
    const [intent, setIntent] = useState('sale');
    const [method, setMethod] = useState('paypal');
    const [description, setDescription] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [jwt, setJWT] = useState('');
    const item = localStorage.getItem('subscription');
    const val = localStorage.getItem('subscription-value');
    const navigate = useNavigate();


    const setAmountValue = (e) => {
        setTotal(e.target.value);
    }

    const setPaymentValue = (e) => {
        setPayment(e.target.value);
    }

    const setIntentValue = (e) => {
        setIntent(e.target.value);
    }

    const setMethodValue= (e) => {
        setMethod(e.target.value);
    }

    const setDescriptionValue = (e) => {
        setDescription(e.target.value);
    }

    const setCurrencyValue = (e) => {
        setCurrency(e.target.value);
    }

    const setJWTValue = (e) => {
        setJWT(e.target.value);
    }

    useEffect(()=>{
        console.log(item.id);
    }
    ,[item]
    );
 
    const Submission = async(e) => {
        e.preventDefault();
        setJWT(localStorage.getItem('Authorization'));
        const response = await axios.post('http://localhost:8220/v1/payment/pay',
            {'total':total,'currency': currency, 'method':method, 'intent':intent, 'description':description},
            {
                headers:{
                    "Authorization": localStorage.getItem('Authorization')
                }
            }
        );

        window.open(response.data,"_blank");
        
    }


    return(
        <div className="App">

            <div className="container">
                <h1>
                    Payment Checkout
                    <br></br>
                    <button type="redirect-front-page" className="btn btn-primary"
                    onClick={()=>{navigate('/dashboard/'+localStorage.getItem('username'))}}>
                        Dashboard
                    </button>

                </h1>
                <p>You are purchasing subscription for {item} where monthly payment is ${val}</p>
            </div>
            
            <div className="container">
                
                <form method="post" class="mt-5 card p-3" onSubmit={Submission}>
                    <div class="form-floating">
                        <label htmlfor="floatingAmount">Total Amount: </label>
                        <input type="amount" class="form-control" id="floatingAmount" placeholder="amount" onChange={setAmountValue}/>
                    </div>

                    <div class="form-currency">
                        <label for="currency">Selected-Currency:  </label>
                        <select name="currency" id="currency" onChange={setCurrencyValue}>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="INR">INR</option>
                            <option value="SGD">SGD</option>
                        </select>
                        <br></br>
                    </div>

                    <div class="form-method">
                        <label for="method">Set method: </label>
                        <select name="method" id="method" onChange={setMethodValue}>
                            <option value="paypal">paypal</option>
                        </select>
                        <br></br>
                    </div>

                    <div class="form-intent">
                        <label for="floating-intent">Intent: </label>
                        <select name="intent" id="intent" onChange={setIntentValue}>
                            <option value="intent">intent</option>
                            <option value="sale">sale</option>
                            <option value="authorize">authorize</option>
                            <option value="order">order</option>
                        </select>
                        <br></br>
                    </div>


                    <div class="form-description">
                        <label htmlfor="description">Description </label>
                        <textarea id="description" name="description" rows="4" cols="50" onChange={setDescriptionValue}></textarea>
                    </div>

                    

                    <div className="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary">Confirm Payment</button>
                    </div>
                </form>
            </div>
            
        </div>
    );
}


export default PaymentFrontPage;
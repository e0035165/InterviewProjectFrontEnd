
import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './FrontPage.css'
import SignUp from "./SignUp";


function FrontPage() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    
    const signUp = async(e) => {
        e.preventDefault();
        navigate('/sign_up');
    }

    const signIn = async(e) => {
        e.preventDefault();
        navigate('/sign_in');
    }

    useEffect(
        ()=>{
            axios.get("http://localhost:8220/v1/frontPage/contactUS")
            .then((response)=>{
                setList(response.data);
                console.log(list);
            })
            .catch((error)=> {
                console.log(error);
                setList(['There has been a server error in retrieving contact information']);
            });
        },[]);

return(
        <>
            <head>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width" initial-scale="1.0"></meta>
                <title>Front-Page</title>
            </head>

            <body>
                <h1>The Melaka Times</h1>
                <div className="sub-application">
                    <h4><a href="https://www.straitstimes.com/world"><strong>World</strong></a></h4>
                    <h4><a href="https://www.straitstimes.com/"><strong>Singapore</strong></a></h4>
                    <h4><a href="https://www.straitstimes.com/sport"><strong>Sports</strong></a></h4>
                    <h4><a href="https://www.straitstimes.com/tech"><strong>Technology</strong></a></h4>
                </div>
                <div className="side-application">
                    <button id="Sign_in" onClick={signIn}>Sign in</button>
                    <button id="Sign_up" onClick={signUp}>Sign up</button>
                </div>
                
                <div>
                    
                </div>
            </body>

            <footer className="column">
                <section id="contact-and-website-info" className="column">
                    <h3>For more information of our company</h3><br></br>
                    <ul>
                        {
                            list.map((item)=>(
                                    <li key={item.id} className="pointer_link">
                                        <strong>{item.personName}</strong><br></br>
                                        <strong>{item.email}</strong>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </section>
            </footer>
            
        </>
    );

}

export default FrontPage;
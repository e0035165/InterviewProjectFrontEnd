import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';



function Activation() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState(false);
    const [jwt,setJwt]=useState('');
    const navigate = useNavigate();

    const setUser = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const setPass = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const setEma = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const setToken = (event) => {
        event.preventDefault();
        setJwt(event.target.value);
    }

    const Activate = async(g) => {
        g.preventDefault();
        console.log(jwt);
        axios.defaults.headers.common["Authorization"]=jwt;
        
        console.log(axios.defaults.headers.common);
        const resp = await axios.post('http://localhost:8220/v1/personalAccount/activation',
            {"username":username,"password":password,"email":email},
            {
                headers:{
                    "Authorization": jwt
                }
            }
                
        );

        if(resp.status===200) {
            setLogin(true);
            console.log(resp.data);
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            localStorage.setItem('Authorization',jwt);
        }
            
    }

    const GoToPersonalizedDashBoard = () => {
        navigate("/");
    }

    const GoToSignInPage = () => {
        navigate("/sign_in")
    }


    return (
        <body>
            <div className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
                    <h1 class="h3 mb-3 fw-normal m-0">
                        Please Activate
                        <div>
                            <button button="button" className="btn btn-primary me-2" onClick={()=>{navigate('/')}}> Front-Page </button>
                            <button button="button" className="btn btn-primary me-2" onClick={()=>{navigate('/sign_up')}}> Sign up </button>
                            <button button="button" className="btn btn-primary me-2" onClick={()=>{navigate('/sign_in')}}> Sign in </button>
                        </div>
                    </h1>
                    
            </div>
            
            <div class="form-signin d-flex justify-content-center align-items-center min-vh-100">
            <form className="text-center mb-4" onSubmit={Activate}>
                <img class="mb-4" src="assets/react.svg" alt="" width="180" height="180"/>
                

                <div class="form-floating">
                    <label htmlfor="floatingUsername">Username: </label>
                    <input type="username" class="form-control" id="floatingUsername" placeholder="Username" onChange={setUser}/>
                </div>


                <div class="form-floating">
                    <label htmlfor="floatingPassword">Password: </label>
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={setPass}/>
                </div>

                <div class="form-floating">
                    <label htmlfor="floatingEmail">Email address</label>
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={setEma}/>
                </div>

                <div class="form-floating">
                    <label htmlfor="floatingJWT">Token:</label>
                    <input type="email" class="form-control" id="floatingJWT" placeholder="..." onChange={setToken}/>
                </div>

                <button class="w-100 btn btn-lg btn-primary" onClick={Activate} type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>

            {login &&
                <div>
                    <button onClick={GoToPersonalizedDashBoard}>Go to Dashboard</button>
                    <button onClick={GoToSignInPage}>Go to Dashboard</button>
                </div>

                
            }
            </div>

        </body>

        
    );



}

export default Activation;
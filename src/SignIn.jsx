import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [bearer, setBearer] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [loginFailed, setLoginFailed] = useState(false);
    const [error_message, setErrorMessage] = useState('');
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

    const Submission = async (e)=> {
        e.preventDefault();
        console.log({"username":username,"password":password,"email":email});
        try{
            const response = await axios.post("http://localhost:8220/v1/frontPage/login",
                {"username":username,"password":password,"email":email});
            console.log(response.data);
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            localStorage.setItem('Authorization', response.data.bearer);
            navigate('/dashboard/'+username);
        }catch(error) {
            switch(error.response.status){
                case 401:
                    console.log("Failed");
                    setErrorMessage("User has wrong password");
                    setLoginFailed(true);
                    break;
                case 400:
                    console.log("Not enabled");
                    setErrorMessage("User is not enabled");
                    setLoginFailed(true);
                    break;

            }
        }
        
        
    }

    return(
        <div>
            <body class="text-center">
                <div className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
                    <h1 class="h3 mb-3 fw-normal m-0">
                        Please sign in
                        <div>
                            <button button="button" className="btn btn-primary me-2" onClick={()=>{navigate('/')}}> Front-Page </button>
                            <button button="button" className="btn btn-primary me-2" onClick={()=>{navigate('/sign_up')}}> Sign up </button>
                        </div>
                    </h1>
                    
                </div>
                
                <div className="d-flex container mt-2">
                    <main class="form-signin">
                        <form onSubmit={Submission}>
                            <img class="mb-4" src="/assests/image.jpg" alt="" width="80" height="60"/>
                            

                            <div class="form-floating">
                                <label htmlfor="floatingUsername">Username: </label>
                                <input type="username" className="form-control" id="floatingUsername" placeholder="Username" onChange={setUser}/>
                            </div>


                            <div class="form-floating">
                                <label htmlfor="floatingPassword">Password: </label>
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={setPass}/>
                            </div>

                            <div class="form-floating">
                                <label htmlfor="floatingInput">Email address</label>
                                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={setEma}/>
                            </div>

                            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                        </form>
                    </main>
                </div>

                {
                    loginFailed && 
                    <div className="alert alert-danger alert dismissible fade show" role="alert">
                        <strong>Error: </strong> {error_message}
                        <button type="button" className="btn-close" onClick={()=>{
                            setLoginFailed(false);
                            setUsername('');
                            setPassword('');
                            setEmail('');
                            document.getElementById("floatingUsername").value='';
                            document.getElementById("floatingPassword").value='';
                            document.getElementById("floatingEmail").value='';

                        }}></button>
                        
                    </div>
                }

            </body>
        </div>
    );

}


export default Login;
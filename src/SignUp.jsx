import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import { Helmet } from "react-helmet-async";


function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('');
    const [success, setSuccess] = useState(false);
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

    const Submission = async (e)=> {
        e.preventDefault();
        console.log({"username":username,"password":password,"email":email});
        const response = await axios.post("http://localhost:8220/v1/frontPage/signup",
            {"username":username,"password":password,"email":email}
        );
        console.log(response.data);
        if(response.status===201) {
            console.log("Success");
            setResponse(response.data);
            setSuccess(true);
        }
    }

    const moveToActivation = async(e) => {
        navigate('/activation')
    }

    return(
        <div>
            <body class="text-center">
                {!success && <main class="form-signin">
                    <form onSubmit={Submission}>
                        <img class="mb-4" src="/assests/image.jpg" alt="" width="80" height="60"/>
                        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

                        <div class="form-floating">
                            <label htmlfor="floatingPassword">Username: </label>
                            <input type="username" class="form-control" id="floatingPassword" placeholder="Username" onChange={setUser}/>
                        </div>


                        <div class="form-floating">
                            <label htmlfor="floatingPassword">Password: </label>
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={setPass}/>
                        </div>

                        <div class="form-floating">
                            <label htmlfor="floatingInput">Email address</label>
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={setEma}/>
                        </div>

                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                    </form>
                </main>}

                {success && <main class="form-submission-complete">
                    <div>
                        <button class="w-100 btn btn-lg btn-primary" onClick={moveToActivation}>Go to Activation Page</button>
                    </div>
                    </main>}
            </body>
        </div>
    );
    
}

export default SignUp;
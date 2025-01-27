import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
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
        const response = await axios.post("http://localhost:8220/v1/frontPage/login",
            {"username":username,"password":password,"email":email}
        );
        console.log(response.data);
        if(response.status===200) {
            console.log("Success");
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            navigate("/dashboard/"+username);
        }
    }

    return(
        <div>
            <body class="text-center">
                <main class="form-signin">
                    <form onSubmit={Submission}>
                        <img class="mb-4" src="/assests/image.jpg" alt="" width="80" height="60"/>
                        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

                        <div class="form-floating">
                            <label htmlfor="floatingUsername">Username: </label>
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
                </main>

            </body>
        </div>
    );

}


export default Login;
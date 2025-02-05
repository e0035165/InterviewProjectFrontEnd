
import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Dashboard() {
    const { username } = useParams();
    const [list,setList] = useState([]);
    const navigate = useNavigate();


    const onSubmit = (even) => {
        
    }

    


    useEffect(
        ()=>{
            axios.get("http://localhost:8220/v1/personalAccount/getSubscriptions",
                {
                    headers:{
                        "Authorization": localStorage.getItem('Authorization')
                    }
                }
            )
            .then((response)=>{
                console.log(response.data)
                setList(response.data);
                console.log(list);
            })
            .catch((error)=> {
                console.log(error);
                setList(['There has been a server error in retrieving contact information']);
            });
        },[]);



    return(
        <body>
            <div>
                {/* <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center mt-2"> Welcome {username}</h1>
                </div> */}
                <h3 className="mt-1 p-3"> Available Subscriptions </h3>
                <div className="container py-4">
                <div className="container d-flex flex-row container-fluid align-items-center gap-1 border p-2">
                    
                    {list.map((item) => (
                        <div key={item.id}>
                            <button type="Subscription" value={item} onClick={(e)=>{
                                console.log(item);
                                localStorage.setItem('subscription',item.name);
                                localStorage.setItem('subscription-value',item.ratePerMonth);
                                navigate('/dashboard/'+localStorage.getItem('username')+"/payment");
                            }}>
                                <div className="container mt-2 align-items-center">
                                    <div className="p-2 bg-warning hover:bg-danger">
                                        <p className="text-center">This is subscription {item.id}</p>
                                        <p className="text-center">User Subscription lasts for {item.name}</p>
                                        <p className="text-center">rate per month is {item.ratePerMonth}</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                    
                </div>
            </div>
            
        </div>
        </body>
        

        
    );
}

export default Dashboard;
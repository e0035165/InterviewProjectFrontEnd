
import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

function Dashboard() {
    const { username } = useParams();
    const [list,setList] = useState([]);

    useEffect(
        ()=>{
            axios.get("http://localhost:8220/v1/frontPage/getSubscriptions")
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
        <div>
            <h1> Welcome {username}</h1>
            <h3> Available Subscriptions </h3>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {item.name}, rate: {item.ratePerMonth}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
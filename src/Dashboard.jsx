
import React, { useState , useEffect, useCallback} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

function Dashboard() {
    const { username } = useParams();

    return(
        <div>
            <h1> Welcome {username}</h1>
        </div>
    );
}

export default Dashboard;
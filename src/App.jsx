import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrontPage from './FrontPage'
import SignUp from './SignUp.jsx'
import Activation from './Activation.jsx'
import Dashboard from './Dashboard.jsx'
import SignIn from "./SignIn.jsx"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  const isAuthenticated = () => {
    return localStorage.getItem("username")!=null && localStorage.getItem("password")!=null;
  }

  const ProtectedRoute = ({children}) => {
    const auth = isAuthenticated();
    return auth ? children : <Navigate to ="/sign_in"/>
  }

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage/>}></Route>
          <Route path="/sign_up" element={<SignUp/>}></Route>
          <Route path="/activation" element={<Activation/>}></Route>
          <Route path="/dashboard/:username" element={
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
            
            }></Route>
          <Route path='/sign_in' element={<SignIn/>}></Route>
        </Routes>
      </Router>
    </>
    
  );
}



export default App

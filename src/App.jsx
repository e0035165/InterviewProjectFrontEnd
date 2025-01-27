import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrontPage from './FrontPage'
import SignUp from './SignUp.jsx'
import Activation from './Activation.jsx'
import Dashboard from './Dashboard.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage/>}></Route>
          <Route path="/sign_up" element={<SignUp/>}></Route>
          <Route path="/activation" element={<Activation/>}></Route>
          {/* <Route path="/dashboard" element={<Dashboard/>}></Route> */}
          <Route path='/sign_in' element={<SignIn/>}></Route>
        </Routes>
      </Router>
    </>
    
  );
}

export default App

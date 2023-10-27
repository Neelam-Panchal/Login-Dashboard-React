import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"

const Header1 = () => {
    
    const profile=localStorage.getItem("email")
   
  
    const removeauth=()=>{
        localStorage.removeItem("Token")
        window.location.href='/'
    }
  
    return (
            //<Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
      
    <div className="container-fluid">
      <Link className="navbar-brand"  to="#" style={{color:"white"}}><b>AUTH</b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <Link className="nav-link" to="/States" style={{color:"white"}}>States</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Country" style={{color:"white"}}>Country</Link>
          </li>
        </ul>
     
       
        <span className="navbar-text">
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{color:"white"}} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {profile}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="nav-link" onClick={removeauth} to=''>Logout</Link>
          
          </div>
  </div>
        
      </span>
      </div>
    </div>
  
  </nav>
  //</Router>
  )
}

export default Header1
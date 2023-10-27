
import {Link} from "react-router-dom"
import "./sidebar.css"


 function header(props:any) {

  const profile=localStorage.getItem("email")

        const removeauth=()=>{
            localStorage.removeItem("Token")
            window.location.href='/'
        }

        
  return (

    
  //<Router>
  <>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
      
      <div className="container-fluid">
        <Link className="navbar-brand"  to="#" style={{color:"blue",fontSize:"30px"}}><b>AUTH</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link" to="" style={{color:"white"}}></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="" style={{color:"white"}}></Link>
            </li>
          </ul>
       
         
          <span className="navbar-text">
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" style={{color:"green"}} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
 
      <div className="sidenav">
        <Link style={{fontSize:"26px",color:"white"}} to="#home"><b></b></Link>
        <Link to="/AllCountries">Country</Link>
        <Link to="/States">State</Link>
       {/* <Link to="#about">{profile}</Link> 
        <Link className="nav-link" onClick={removeauth} to=''>Logout</Link> */}
      </div>
       

  
  </>
      //</Router>
      
  )
}
export default header;

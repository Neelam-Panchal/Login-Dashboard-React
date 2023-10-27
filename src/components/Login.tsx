import React from 'react'
import axios from 'axios';
import { useState} from 'react'
import States from './States';
import Redirect from 'react-router-dom'
import {useAuth } from '../context/AuthContext';
  
  const Login: React.FC = () => {
   const {login1}=useAuth();
    const [email, setEmail] = useState<string>('');
    const [pwd, setpwd] = useState<string>('');
    const [inveliduser,setInvaliduser]=useState<string>('')
    const [errors, setErrors] = useState({
      email: '',
      password: '',
      general: '',
    });
    
    
    const validateForm = () => {
      switch (true) {
        case !email.trim():
          setErrors({ ...errors, email: 'Email is required' });
          return false;
        case !pwd.trim():
          setErrors({ ...errors, password: 'Password is required' });
          return false;
        default:
          return true;
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setErrors({ email: '', password: '', general: '' });

    if (!validateForm()) {
      return;
    }
      
      const users = [
        { username: 'chirag.sutariya1@spec-india.com', password: '123456' },
        
      ];
      const user = users.find((u) => u.username === email && u.password === pwd);
      if(email == ""){

      }
      if(user){
            login1(email,pwd);
      }else{
            console.log("Invalid username or password")
            setInvaliduser("Invalid username or password")
      }
      
        
           

        }


  return (
    <>
       
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                  <div className="card-body p-5 text-center">

                    <h3 className="mb-5">Sign in</h3>
                  <form >
                      <div className="form-outline mb-4">
                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg"
                                 value={email}
                                 onChange={(e) =>
                                 setEmail(e.target.value)}  />
                          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}       
                        
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg"
                                   value={pwd}
                                   onChange={(e) =>
                                   setpwd(e.target.value)}  />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                      </div>

                      {/* <!-- Checkbox --> */}
                      {/* <div className="form-check d-flex justify-content-start mb-4">
                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                        <label className="form-check-label" > Remember password </label>
                      </div> */}

                      <button className="btn btn-info btn-lg btn-block" onClick={handleSubmit}>Login</button>
                      <p style={{color:"red",marginTop:"20px"}}>{inveliduser}</p>
                  </form>

                  

                  

                  </div>
                </div>
              </div>
            </div>
          </div>
</section>




    </>
  )
}

export default Login
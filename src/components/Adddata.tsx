import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import "../App.css"
import Header from './Header';
import Footer from './Footer'

  
  const Adddata: React.FC = () => {
   
    const token=localStorage.getItem("Token")

    const [updateName, setUpdatedName] = useState<string>('');
    const [Id, setId] = useState<number|null>(null);
   
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      
     
        if(Id == null){
           
           // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwa2lkIjoiMyIsImVtYWlsIjoiY2hpcmFnLnN1dGFyaXlhMUBzcGVjLWluZGlhLmNvbSIsIlVzZXJUeXBlIjoiMSIsInBsYW5uYW1lIjoiIiwianRpIjoiMTg0YzY0YzktNDkyZS00NDkwLTlkZDktZmNkYjlhZTNlZmNhIiwibmJmIjoxNjk4MjI0MDEzLCJleHAiOjE2OTgyNjAwMTMsImlhdCI6MTY5ODIyNDAxMywiaXNzIjoiRnJlZC1CYWNrZW5kIiwiYXVkIjoiRnJlZC1Gcm9udGVuZCJ9.22vMtL8hn1_tA8HGmzMdvr8vj66b7l7VAQeyB8hS8-I' ;

            axios.post('http://10.37.55.216:5000/api/v1/Country',{countryName: updateName},{
              headers:{
    
                "Authorization" : `Bearer ${token} `
              }
            })
                .then(response => {
                // Handle success, update state if needed
                const data=response.data
                if(data){
                  window.location.href='/AllCountries'
                }
                console.log('Record added:', updateName);
                })
                .catch(error => {
                // Handle error
                console.error('Add error:', error);
                });
        }
        else{
            const url1 = 'http://10.37.55.216:5000/api/v1/Country';
            //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwa2lkIjoiMyIsImVtYWlsIjoiY2hpcmFnLnN1dGFyaXlhMUBzcGVjLWluZGlhLmNvbSIsIlVzZXJUeXBlIjoiMSIsInBsYW5uYW1lIjoiIiwianRpIjoiMTg0YzY0YzktNDkyZS00NDkwLTlkZDktZmNkYjlhZTNlZmNhIiwibmJmIjoxNjk4MjI0MDEzLCJleHAiOjE2OTgyNjAwMTMsImlhdCI6MTY5ODIyNDAxMywiaXNzIjoiRnJlZC1CYWNrZW5kIiwiYXVkIjoiRnJlZC1Gcm9udGVuZCJ9.22vMtL8hn1_tA8HGmzMdvr8vj66b7l7VAQeyB8hS8-I' ;
            axios
            .post(url1, { countryName: updateName ,pkId:Id},{
              headers:{
    
                "Authorization" : `Bearer ${token} `
              }
            })
            .then(response => {
            // Handle success, update state if needed
            const data=response.data
            if(data){
              window.location.href='/AllCountries'
            }
            console.log('Record updated:', updateName);
            })
            .catch(error => {
            // Handle error
            console.error('Add error:', error);
            });
        }
    }
    return(
        <>
        <Header/>
        
        <form  >
        <div className="row">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
                <label style={{marginTop:'150px'}}>Country</label>
                <div className='col-xs-4'>
                <input className="form-control" id="exampleInputEmail1"  
                    type="text"
                    value={updateName}
                    onChange={(e) =>
                    setUpdatedName(e.target.value)} 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Country"/>
                </div>
                <div className='col-xs-4'>
                <label >Id</label>
                <input  type="number"
                    value={Id || ''}
                    onChange={(e) =>
                    setId(parseInt(e.target.value))}
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Id"/>
                </div>
                <button style={{marginTop:'20px'}} type="submit" onClick={handleSubmit} className="btn btn-info">Submit</button>
            </div>
        </div>
                    
        </form>
            {/* <form >
        <div>
          <label htmlFor="countryName">Country Name:</label>
          <input
            type="text"
            value={updateName}
            onChange={(e) =>
                setUpdatedName(e.target.value)}
          />
           <input
            type="number"
            value={Id || ''}
            onChange={(e) =>
                setId(parseInt(e.target.value))}
          />
        </div>
        <div>
        </div>
         Add other form fields as needed 
        <div>
          <button type="submit" className="btn btn-primary" >Add</button>
        </div>
      </form> */}
      {/* <Footer/> */}
        </>
    )
}

export default Adddata
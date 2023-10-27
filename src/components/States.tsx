import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState ,useEffect } from 'react'
import axios from 'axios'

export interface records{
  value:number,
  name:string
 }
 interface stateprops{
      pkId: number,
      stateName: string,
      countryPKId: number,
      countryName: string,
      isActive: true
   
 }
//  const token=localStorage.getItem("Token")
//  if(token!=null){
const States = () => {
   const token=localStorage.getItem("Token")
   const [getdata, setData] = useState<records[]>([]);
   const [statedata,setStatedata]=useState<stateprops[]>([])
   const [selectedCountry,setselectedCountry]=useState('')
   // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6W3sidXNlcm5hbWUiOiJjaGlyYWcuc3V0YXJpeWFAc3BlYy1pbmRpYS5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiJ9XSwiaWF0IjoxNjk1MDEyMjM2LCJleHAiOjE2OTUwNDgyMzZ9.sW2r4xmRgGk0B_UAli_H8PyaMaTl3tnmNrCU6Mm46CQ';
            useEffect(() => {
               axios.get('http://10.37.55.216:5000/api/v1/Country/GetCountryList'
        ,{
          headers:{

            "Authorization" : `Bearer ${token} `
          }
        }
      ).then(response =>{
                  setData(response.data)
                  console.log(response.data)
               } )
            }, []);
    
            useEffect(() => {
               // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6W3sidXNlcm5hbWUiOiJjaGlyYWcuc3V0YXJpeWFAc3BlYy1pbmRpYS5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiJ9XSwiaWF0IjoxNjk1MDEyMjM2LCJleHAiOjE2OTUwNDgyMzZ9.sW2r4xmRgGk0B_UAli_H8PyaMaTl3tnmNrCU6Mm46CQ' ;
               //const token=localStorage.getItem("Token")
               axios.get(`http://10.37.55.216:5000/api/v1/State/Search?countryId=${selectedCountry}`,{
                  headers:{

                     "Authorization" : `Bearer ${token} `
                   }
               }
            ).then(response => {
   
               setStatedata(response.data.data)
               console.log(response.data.data)

            // console.log('login added:', email);
            // console.log('login added:', pwd);
            })
    }, []);
    useEffect(() => {
      // Log to check the value of selectedCountry
      console.log("Selected Country:", selectedCountry);
    
      // Filter the data
      const filteredStates = statedata.filter((s) => s.countryName == selectedCountry);
    
      // Log the filtered data for debugging
      console.log("Filtered States:", filteredStates);
    
      // Update the state with the filtered data
      setStatedata(filteredStates);
    }, [selectedCountry]);
    
   

  return (
    <>
            <Header/>
            <select style={{width:'50%',margin:'100px 50px 50px 300px'}} className="form-select" aria-label="Default select example" onChange={(e) =>
                                 setselectedCountry(e.target.value)}>
                            {getdata.map((item) => (
                                 <option>{item.name}</option>
                                 ))} `
                        </select>  
            <select style={{width:'50%',margin:'20px 50px 50px 300px'}} className="form-select" aria-label="Default select example">
            {statedata.map((item1) => (
                          <option>{item1.stateName}</option>
                           ))}
            </select>   
            {/* <div classNameName="dropdown my-menu" style={{textAlign:'center',marginTop:'200px',marginBottom:'300px'}}>
            <button classNameName="btn btn-secondary 
                           dropdown-toggle" 
                    type="button"
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false" style={{backgroundColor:'#0096FF'}}>
                Select Country
            </button>
            <div classNameName="dropdown-menu" 
                 aria-labelledby="dropdownMenuButton">
               
                 {getdata.map((item) => (
                   <a classNameName="dropdown-item" 
                   href="#">{item.name}</a>
                    ))}
            </div>
        </div> */}
            {/* <div className="container"style={{textAlign:'center',marginTop:'100px',
            width:'500px',}}>
               <div className="row">
                  <div className="col mt-4">
                     <div className="dropdown">          
                     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expande
                      style={{width:'500px',height:'50px'}}> Country</button>                                                                           
                        <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton"> 
                                                                             
                                                                           
                     </div>    
                  </div>
               </div>
            </div>   
            </div>     */}
            {/* <div className="container"style={{textAlign:'center',width:'500px',}}>
               <div className="row">
                  <div className="col mt-4">
                     <div className="dropdown">          
                     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expande
                      style={{width:'500px',height:'50px'}}> States</button>                                                                           
                        <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">  
                                                                         
                          
                                                                             
                     </div>    
                  </div>
               </div>
            </div>   
            </div>     */}
            
    </>
  )
}

export default States
 
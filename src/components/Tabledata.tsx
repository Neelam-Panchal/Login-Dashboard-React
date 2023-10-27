import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import "./table.css"
import Header from './Header'

export interface records{
  pkId:number;
  countryName:string;
  isActive:boolean
}

const Tabledata = () => {
  const token=localStorage.getItem("Token")
    const [getdata, setData] = useState<records[]>([]);
    
    //const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwa2lkIjoiMyIsImVtYWlsIjoiY2hpcmFnLnN1dGFyaXlhMUBzcGVjLWluZGlhLmNvbSIsIlVzZXJUeXBlIjoiMSIsInBsYW5uYW1lIjoiIiwianRpIjoiNjFiNmQ5YTYtN2QxYi00YTJiLThlZDctMGFjNjM4N2NlYjU3IiwibmJmIjoxNjk4MjI0NjQ3LCJleHAiOjE2OTgyNjA2NDcsImlhdCI6MTY5ODIyNDY0NywiaXNzIjoiRnJlZC1CYWNrZW5kIiwiYXVkIjoiRnJlZC1Gcm9udGVuZCJ9.EIRnOW8WcsfmQvuisqQgU0AskYD2kRYeA4RQQTOm9FA' };
    useEffect(() => {
      
      if(token!=null)
      {
        axios.get('http://10.37.55.216:5000/api/v1/Country/Search?Page=5&PageSize=30'
        ,{
          headers:{

            "Authorization" : `Bearer ${token} `
          }
        }
      )
          .then(response =>{
              setData(response.data.data)
              console.log(response.data.data)
          } )
          
      }
      else{
        window.location.href='/'
      }
    }, []);

    const handleDelete = async (pkId:number) => {
      try {
          await axios.delete(`http://10.37.55.216:5000/api/v1/Country?id=${pkId}`,{
            headers:{
  
              "Authorization" : `Bearer ${token} `
            }
          }).then(()=>setData(getdata.filter((record)=>pkId !== record.pkId)));
      } catch (error) {
         console.error(error);
      }
   };

    
return (
  <>
          <Header/>
            
            <h3 style={{ marginLeft: '300px',marginTop:'50px'}}>All Countries</h3>
            
            
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
            
            <table id="customers" className="table table-bordered table-striped mb-0">
            
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    {/* <th>IsActive</th> */}
                    <th><Link to="/Adddata"><button className="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">Add New</button></Link></th>
                </tr>
                </thead>
                <tbody>

                {getdata.map((item) => (
                      <tr key={item.pkId} >
                        
                        <td>{item.pkId}</td>
                        <td>{item.countryName}</td>
                        
                        {/* <td>{item.isActive}</td> */}
                        {/* <td><button >delete</button></td> */}
                        <td><i onClick={()=>handleDelete(item.pkId)} className="fa fa-times-circle" style={{fontSize:'30px',}} ></i></td>
                      
                      </tr>
                    ))}
                        {/* <button onClick={() => props.onEdit(i)}>edit</button>*/}
                        
                     
            </tbody>
                 
            </table>
            </div>
            
  </>
  
);
}

export default Tabledata
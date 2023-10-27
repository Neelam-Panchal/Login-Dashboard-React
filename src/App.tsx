import { Route,Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer'
import Login from './components/Login'
import States from './components/States'
import Tabledata from './components/Tabledata';
import Adddata from './components/Adddata';
import Header from './components/Header'

function App() {
  
  return (
    <>
    
    
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/AllCountries" element={<Tabledata/>}/>
        <Route path="/States" element={<States/>}/>
        <Route path="/Adddata" element={<Adddata/>}/>
      </Routes>
    
    
     
    </>
  );
}

export default App;

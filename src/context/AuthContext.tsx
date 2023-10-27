import React, { ReactNode, createContext, useContext, useState } from 'react';
import axios from 'axios';

// Define the shape of the authentication context
interface AuthContextType {
  isAuthenticated: boolean;
  login1: (email: string, password: string) => void;
  logout: () => void;
}

interface Authprops{
  children:ReactNode
}
// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component to wrap your app
export function AuthProvider({children}:Authprops){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  
  // Function to handle user login
        const login1 = (email: string, pwd: string) => {
          
            // Perform authentication logic here, e.g., validate credentials with an API
            
            const url1 = 'http://10.37.55.216:5000/api/v1/Auth/UserLogin';
            // const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6W3sidXNlcm5hbWUiOiJjaGlyYWcuc3V0YXJpeWFAc3BlYy1pbmRpYS5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiJ9XSwiaWF0IjoxNjk1MDEwNDkyLCJleHAiOjE2OTUwNDY0OTJ9.gszdI3K4Byt1kXp0aFT_57-CsHb7BZFwz7mvdKqZU_8' };
            // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwa2lkIjoiMyIsImVtYWlsIjoiY2hpcmFnLnN1dGFyaXlhMUBzcGVjLWluZGlhLmNvbSIsIlVzZXJUeXBlIjoiMSIsInBsYW5uYW1lIjoiIiwianRpIjoiMTg0YzY0YzktNDkyZS00NDkwLTlkZDktZmNkYjlhZTNlZmNhIiwibmJmIjoxNjk4MjI0MDEzLCJleHAiOjE2OTgyNjAwMTMsImlhdCI6MTY5ODIyNDAxMywiaXNzIjoiRnJlZC1CYWNrZW5kIiwiYXVkIjoiRnJlZC1Gcm9udGVuZCJ9.22vMtL8hn1_tA8HGmzMdvr8vj66b7l7VAQeyB8hS8-I"; // Replace with the actual token
           
              axios
              .post(url1, { username: email ,password:pwd})
              .then(response => {
                const result = response.data
                if(result){
                  // Handle success, update state if needed
                  localStorage.setItem("email", JSON.stringify(email));
                  localStorage.setItem("pwd", JSON.stringify(pwd));
                  localStorage.setItem("Token", response.data.data.token);
                  window.location.href='/AllCountries'
                  setIsAuthenticated(true);
                }
                else{
                  window.location.href='/'
                }
              })
           
            
            // If authentication is successful, set isAuthenticated to true
           
        };

  // Function to handle user logout
  const logout = () => {
    // Perform logout logic here, e.g., clear user session or token
    // Set isAuthenticated to false
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login1, logout }}>
     {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

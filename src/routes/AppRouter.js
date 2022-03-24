import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CreateUrl } from '../components/urls/CreateUrl';
import { UrlsList } from '../components/urls/UrlList';
import { AuthContext } from '../context/AuthContext';
import{startChecking} from '../helpers/startChecking'
import { NavBar } from '../ui/NavBar';



export const AppRouter = () => {
    const{setChecking, setUser, checking}= useContext(AuthContext);
    useEffect(() => {
         startChecking(setChecking, setUser);
      }, [setChecking,setUser])
     
     
    if(checking){
        return <h5>Espere...</h5>
     }
    return (
       
       
        <BrowserRouter>
        <NavBar/> 
        <div className = "container">
        <Routes>
      
        <Route path="/" element={ <LoginScreen/>}/>

        <Route path="/urls_list" element={<UrlsList/>} />
        <Route path="/create_url" element={<CreateUrl/>} />
        
        {/* <Route path="/login" element={<LoginScreen/>} /> */}
        
        {/* <Route path = "/*" element= {<DashboardRoutes/>}/> */}
        
        </Routes>
        </div>
        </BrowserRouter>
        
    )
}

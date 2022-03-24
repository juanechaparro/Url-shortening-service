import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const NavBar = () => {
  
    const {user,setChecking, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = ()=>{
       
              localStorage.clear();
              setChecking(false);
              setUser({});
              navigate('/', {
                replace:true
            });
        
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
        

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        
                        className={({isActive})=> "nav-item nav-link ml-20 w-70 " + (isActive && 'active') }
                        to="/"
                    >
                        Home/login
                    </NavLink>

                    <NavLink 
                        className={({isActive})=> "nav-item nav-link w-70" + (isActive && 'active') }
                        to="/urls_list"
                    >
                        Top100
                    </NavLink>
                    <NavLink 
                        className={({isActive})=> "nav-item nav-link w-70 " + (isActive && 'active') }
                        to="/create_url"
                    >
                        Create_URL
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className = "nav-item nav-link text-info" >
                       {user.name}

                    </span>
                    <button 
                        className="nav-item nav-link btn" 
                        onClick = {handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
  
}

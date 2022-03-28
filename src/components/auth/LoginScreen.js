import React, { useContext } from 'react';
import{fetchSinToken} from '../../helpers/fetch'
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './login.css';

export const LoginScreen = () => {
    const navigate = useNavigate();
    const { setUser, user} = useContext(AuthContext);

    const [ formLoginValues, handleLoginInputChange ] = useForm( {
        lEmail: "juanechaparro@hotmial.com",
        lPassword:'123456'

    } );
    const [ formRegisterValues, handleRegisterInputChange ] = useForm( {
      

    });
   const  {rName, rEmail,rPassword1,rPassword2} = formRegisterValues;
   const {lEmail, lPassword} = formLoginValues;
    const handleLogin= async(e)=>{
        e.preventDefault();
        const resp = await fetchSinToken('auth', {email: lEmail, password:lPassword}, 'POST');
        const body = await resp.json();
        console.log(body);
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            setUser({
                uid:body.uid,
                name: body.name
            })
            navigate("/urls_list");
        }else{
            Swal.fire('Error', body.msg, 'error');
        }
        
    }
    const handleRegister = (e)=>{
        e.preventDefault();
        if(rPassword1!== rPassword2){
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error' );

        }

        
    }
    return (
        <div className="container login-container">
            {    !user.uid &&
                <button onClick={(e)=>{navigate("/urls_list")}}
                className='btn btn-primary continue-btn '>
                Continue without sign in</button>
            }
            
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name= "lEmail"
                                value ={lEmail}
                                onChange = {handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name= "lPassword"
                                value ={lPassword}
                                onChange = {handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
                
                <div className="col-md-6 login-form-2">
                    <h3>Sign up</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name = "rName"
                                value ={rName}
                                onChange= {handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name = "rEmail"
                                value ={rEmail}
                                onChange= {handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password" 
                                name = "rPassword1"
                                value ={rPassword1}
                                onChange= {handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat Password" 
                                name = "rPassword2"
                                value ={rPassword2}
                                onChange= {handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
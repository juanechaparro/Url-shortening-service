import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
import { fetchSinToken } from '../../helpers/fetch';
import { useForm } from '../../hooks/useForm';

export const CreateUrl = () => {
  const navigate = useNavigate();
  const{user} = useContext(AuthContext);
  const [ formUrlValues, handleUrlInputChange ] = useForm( {  

  });
 const  {title, longUrl} = formUrlValues;

 const handleUrl = async(e)=>{
  e.preventDefault();
        const resp = await fetchSinToken('urls', {title, longUrl,user:user?.uid }, 'POST');
        console.log(resp);
        const body = await resp.json();
        console.log(body);
        if (body.ok){
            navigate("/urls_list");
        }else{
            Swal.fire('Error', body.msg, 'error');
        }
        

 }
  return (
    <div className="container login-container">
       <div className="col-md-6 form-3 animate__animated animate__bounce">
                    <h2> Create your shortUrl</h2>
                    <form onSubmit={handleUrl}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                name = "title"
                                value ={title}
                                onChange= {handleUrlInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Long Url"
                                name = "longUrl"
                                value ={longUrl}
                                onChange= {handleUrlInputChange}
                            />
                        </div>
                        

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Create Url" />
                        </div>
                    </form>
                </div>
            </div>
    
  
  )
}

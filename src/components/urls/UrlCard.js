import React from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

export const UrlCard = ({title, shortUrl, nVisits,id}) => {
    const handleDelete = async(e)=>{
        e.preventDefault();
        console.log(e);
        const resp = await fetchConToken(`urls/${id}`, {}, 'DELETE');
        
        const body = await resp.json();
        
        if (body.ok){
            Swal.fire('Success', `Url ${title}   deleted`, 'success'); 
        }else{
            Swal.fire('Error', body.msg, 'error');
        }
    }
  return (
    <div className = "card animate__animated animate__bounce">
    <h3>{title} </h3> 
    <br />
    <p> <b> Number of visits </b>: {nVisits} </p>
    <p> <b> Short Url </b>: <a href={shortUrl}>{shortUrl}</a></p>
    <button onClick={handleDelete} className='btn btn-outline btn-danger'>Delete ⛔</button>
    
</div>
  )
}
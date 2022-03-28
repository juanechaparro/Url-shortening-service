import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetchUrls} from '../../hooks/useFetchUrls'
import { UrlCard } from './UrlCard';



export const UrlsList = () => {
  const [{loading, urls}, setUrlsState] = useFetchUrls();
  const updateDelete = (id)=>{
      setUrlsState({
          loading,
          urls: urls.filter(url=>url.id !== id)
      })
  }
  const navigate = useNavigate();
  return (
    <>
    <h3 className = 'animate__animated animate__fadeIn'>Short Urls top 100:
     <button onClick={(e)=>{navigate("/create_url")}} className='btn btn-primary ml-20'> Create a Short Url</button></h3>
     <br />
     <b></b>
    {loading && <p className ='animate__animated animate__flash'>'Cargando...'</p> }
     
         
             <div className = "card-grid">
             {
                urls.map((url)=><UrlCard
                 key={url.id}
                {...url} 
                updateDelete ={updateDelete}
                />)
             }
             </div>
           
         
      
     </>
  )
}
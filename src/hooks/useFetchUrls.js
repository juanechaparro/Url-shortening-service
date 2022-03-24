import { useEffect, useState } from "react";
import {  fetchSinToken } from "../helpers/fetch";

export const useFetchUrls = ()=>{
    const [state, setState] = useState({
        urls :[],
        loading:true
    });
    
    const getUrls = async()=> {
        try{
            const resp = await fetchSinToken("urls");
            const {urls}= await resp.json();
            urls.sort((a,b)=>{
                return b.nVisits - a.nVisits
            })
            return urls;
        }catch(error){
            console.log(error);
        }
    }
      
    useEffect(() => {
      getUrls().then(usrs=>{
          setState({
              urls:usrs,
              loading:false
          })
      })
    
     
    }, [state.urls])
    return state;
}


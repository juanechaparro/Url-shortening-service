import { fetchConToken } from "./fetch";




export const startChecking = async(setChecking, setUser) => {
    
    const resp = await fetchConToken('auth/renew');
    const body = await resp.json();
    console.log(body)
    if (body.ok){
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        setChecking(false);
        setUser({
            uid:body.uid,
            name:body.name
        });
      
    }else{
       console.log('Error', body.msg, 'error') ;
        setChecking(false);
    } 
}

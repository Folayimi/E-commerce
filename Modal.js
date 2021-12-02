import React, {useEffect} from 'react';
import {ErrorMode} from "./styledComponents";
const Modal=({message, setError, modal, setModal})=>{    
    useEffect(()=>{
        setModal(true);
    },[])  
    setTimeout(()=>{
        setModal(false);
        setError(false);
    },[3000]) 
    return(
        <>
        {modal && <ErrorMode>{message}</ErrorMode>}            
        </>
    ) 
}
export default Modal;

import {useEffect,useState,useCallback} from 'react'
export const useFetch = (Url) =>{
    const[loading,isLoading] = useState(true);
    const[products,setProducts] = useState([])

    const getProducts = useCallback(async () =>{
        const response = await fetch(Url);
        const products = await response.json();
        setProducts(products); 
        isLoading(false);        
    },[Url]);

    useEffect(()=>{
        getProducts();
    },[Url,getProducts])
    return {loading,products};
}

import React, {useEffect,useState} from "react";
import { Link, useParams} from "react-router-dom";
import {Data} from "./APIs/productsData";

const Product = () =>{
    const {name} = useParams();
    const [product,setProduct] = useState("New Product");
    useEffect(()=>{
        const preferedProduct = Data.find((items)=> items.product === name);
        setProduct(preferedProduct);
    })
    return(
        <>            
            <h1>{product}</h1>          
        </>
    )
}
export default Product;
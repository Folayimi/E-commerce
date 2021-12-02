import React, {useEffect,useState} from "react";
import { Link, useParams} from "react-router-dom";
import {Data} from "./APIs/categoriesData";

const Category = () =>{
    const {name} = useParams();
    const [category,setCategory] = useState("New Category");
    useEffect(()=>{
        const chosenCategory = Data.find((items)=> items.category === name);
        setCategory(chosenCategory);
    })
    return(
        <>            
            <h1>{category}</h1>          
        </>
    )
}
export default Category;
import React, {useEffect,useState} from "react";
import { Link, useParams} from "react-router-dom";
import {Data} from "./APIs/itemsData";

const Item = () =>{
    const {name} = useParams();
    const [item,setItem] = useState("New Item");
    useEffect(()=>{
        const chosenItem = Data.find((goods)=> goods.Item === name);
        setItem(chosenItem);
    })
    return(
        <>            
            <h1>{item}</h1>          
        </>
    )
}
export default Item;
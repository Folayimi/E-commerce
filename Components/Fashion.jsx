import React, {useState,useEffect,useRef} from 'react';
import { Link } from "react-router-dom";
import { Tprd,deals,shopping,dataC,moving} from './APIs/data';
import { Shirt,Shoes,Bags,Wrist,Necklace,
Neckbag,Gcooker,Shelf,FTprd,Fdeals} from "./APIs/categoriesData";
import {HSection,InvisibleBar} from '../styledComponents';
const scrollToRef = (ref) => window.scrollTo(0,ref.current.offsetTop)
const Fashion = ({onMobile})=>{
    const position = useRef(null);
    useEffect(()=>{
        scrollToRef(position)
    },[])    
    return(
        <>
            {
                onMobile ?
                <>
                <HSection>
                    <InvisibleBar ref={position}/>
                    <div className="Flabel" style={{color:"white"}}>
                        <h2>Check Out Our Top Selling Fashion Items</h2>                 
                    </div>
                    {
                        Fdeals.map((items)=>{
                            return <Deals {...items} key={items.id}/>
                        })
                    }
                </HSection>
                </>
                :
                <>
                <HSection>
                    <InvisibleBar ref={position}/>
                    <div className="Flabel" style={{color:"white"}}>
                        <h2>Check Out Our Top Selling Fashion Items</h2>                 
                    </div>
                    {
                        Fdeals.map((items)=>{
                            return <Deals {...items} key={items.id}/>
                        })
                    }
                </HSection>
                <div className="categories">
                    {
                        dataC.map((items)=>{
                            return <Category {...items} key={items.id}/>
                        })
                    }
                </div>
                </>
            }                    
            <div className="Fashion">
            {
                FTprd.map((items)=>{
                    return <TopProducts {...items} key={items.id}/>
                })
            }
            </div>            
                                                     
        </>
    )
}
export default Fashion;

const Category = ({text,link}) =>{        
    return(
        <>
            <Link to={link}>
                <div className="Item"><p>{text}</p></div>
            </Link>
        </>
    )
}

const Deals = ({txtA,txtB,txtC,txtD,img1,img2,link})=>{    
    return(
        <>
        <div className="FContainer">
        <div className="FSprd1">
                <div className="Fprd1">
                    <div className="descr">
                        <div className="txt1">
                            <p>{txtA}</p>
                        </div>                      
                        <div className="txt2">
                            <p>{txtB}</p>
                        </div>                           
                    </div>
                    <img src={img1} alt="img"/>
                </div>
                <div className="Fprd2">
                    <div className="descr">
                        <div className="txt1">
                            <p>{txtC}</p>
                        </div>                      
                        <div className="txt2">
                            <p>{txtD}</p>
                        </div>                           
                    </div>
                    <img src={img2} alt="img"/>
                </div>
            </div>
        </div>            
        </>
    )
}

const TopProducts = ({id,text,description,price})=>{    
        return(
            <>
            <div className="FTopItems">
                <div className="txt"> {text}</div>
                <div className="topProducts">
                <div className="FPitems">
                    {
                        FTprd.map((items)=>{
                            if(items.id===1 && items.id===id){                                
                                return(
                                    <>
                                        {
                                            Shirt.map((item)=>{
                                               return(
                                                   <>
                                                        <div className="image">
                                                            <img src={item.img} alt="shirt"/>                                                
                                                        </div>
                                                   </>
                                               ) 
                                            })
                                          }
                                    </>
                                )
                            }
                            else if(items.id===2 && items.id===id){
                                return(
                                    <>
                                        {
                                            Shoes.map((item)=>{
                                               return(
                                                   <>
                                                        <div className="image">
                                                            <img src={item.img} alt=""/>                                                
                                                        </div>
                                                   </>
                                               ) 
                                            })
                                        }
                                    </>
                                )
                            }
                            else if(items.id===3 && items.id===id){
                                return(
                                    <>
                                        {
                                            Bags.map((item)=>{
                                               return(
                                                   <>
                                                        <div className="image">
                                                            <img src={item.img} alt=""/>                                                
                                                        </div>
                                                   </>
                                               ) 
                                            })
                                        }
                                    </>
                                )
                            }
                            else if(items.id===4 && items.id===id){
                                return(
                                    <>
                                        {
                                            Wrist.map((item)=>{
                                               return(
                                                   <>
                                                        <div className="image">
                                                            <img src={item.img} alt=""/>                                                
                                                        </div>
                                                   </>
                                               ) 
                                            })
                                        }
                                    </>
                                )
                            }
                            else if(items.id===5 && items.id===id){
                                return(
                                    <>
                                        {
                                            Necklace.map((item)=>{
                                               return(
                                                   <>
                                                        <div className="image">
                                                            <img src={item.img} alt=""/>                                                
                                                        </div>
                                                   </>
                                               ) 
                                            })
                                        }
                                    </>
                                )
                            }
                            else if(items.id===6 && items.id===id){
                                return(
                                    <>
                                        {
                                            Neckbag.map((item)=>{
                                               return(
                                                   <>
                                                        <div className="image">
                                                            <img src={item.img} alt=""/>                                                
                                                        </div>
                                                   </>
                                               ) 
                                            })
                                        }
                                    </>
                                )
                            }
                            else if(items.id===7 && items.id===id){
                                return(
                                    <>
                                        {
                                            Gcooker.map((item)=>{
                                               return(
                                                   <>
                                                        <div className="image">
                                                            <img src={item.img} alt=""/>                                                
                                                        </div>
                                                   </>
                                               ) 
                                            })
                                        }
                                    </>
                                )
                            }
                            else if(items.id===8 && items.id===id){
                                return(
                                    <>
                                        {
                                            Shelf.map((item)=>{
                                               return(
                                                   <>
                                                        <div className="image">
                                                            <img src={item.img} alt=""/>                                                
                                                        </div>
                                                   </>
                                               ) 
                                            })
                                        }
                                    </>
                                )
                            }
                            return null;
                        })                                                        
                    }                                                    
                </div>
                <div className="description">
                    <p>{description}</p>                        
                </div>
                </div>
            </div>                
            </>
        )    
}


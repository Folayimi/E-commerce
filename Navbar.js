import React, {useState,useEffect} from 'react';
import cart from "./cart.png";
import {SearchIcon, XIcon, HomeIcon} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { dataC} from './Components/APIs/data';
import {RegisterD,RegisterM} from './Register';
const Navbar = ({onMobile})=>{        
    const [search,setSearch] = useState("");   
    const [count,setCount] = useState(0);
    const [category,setCategory] = useState(false); 
    const [sign,setSign] = useState(false);
    const [background,setBackground] = useState('rgba(0,0,0,0)')            
    document.addEventListener('scroll',()=>{        
        if(window.pageYOffset>140){
            setBackground("rgba(0,0,0,0.7)");            
        }
        else{
            setBackground("rgba(0,0,0,0)");            
        }
    });
    document.removeEventListener('scroll',()=>{
        if(window.pageYOffset>140){
            setBackground("rgba(0,0,0,0.9)");            
        }
        else{
            setBackground("rgba(0,0,0,0)");            
        }
    });              
    return(
        <>           
            {
                onMobile ?
                <>
                <div className="Head" style={{background:background}}>
                    <div className="top1">
                        <div className="brandN">Florinfix</div>
                        <div className="search">                        
                            <input type="text" name="search" 
                            placeholder="Search here"
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}/>   
                            {
                                search ? 
                                <div className="searchResult"></div>:
                                <div></div>
                            }                        
                            <SearchIcon width="20px" color="black"/>                             
                        </div>     
                        <ul>                                                                                                       
                            <li onClick={()=>setSign(true)}>SignUp</li>                                                                
                        </ul>               
                    </div>   
                    <div className="top2">
                        <div className="Categories" onClick={()=>{
                            setCategory(true);
                        }}>
                            Categories
                        </div>
                    </div>      
                    {
                        category ?
                        <div className="Menu" style={{left:"0%"}}>
                        {
                            dataC.map((items)=>{
                                return <Category {...items} 
                                setCategory={setCategory} key={items.id}/>
                            })
                        }
                        <div className="hide" onClick={()=>{
                            setCategory(false);
                        }}>
                            <XIcon color="white" width="35px"/> 
                        </div>
                        </div> 
                        :
                        <div className="Menu" style={{left:"-100%"}}>
                        {
                            dataC.map((items)=>{
                                return <Category {...items} key={items.id}/>
                            })
                        }
                        <div className="hide" >
                            <XIcon color="white" width="35px"/> 
                        </div>
                        </div>
                    }                                                                                    
                </div>                        
                <div className="base">
                    <div class="cnt">
                        <Link to="/home">
                            <HomeIcon color="white" width="35px"/>                    
                        </Link>
                    </div>     
                    <div class="cnt">
                        <Link to="/shipment">
                            <p>Logo</p>
                        </Link> 
                    </div>              
                    <div className="cnt">
                        <img src={cart} alt="cart"/>
                        <div className="cartLabel">{count}</div>
                    </div>            
                </div>
                
                <div>
                    {
                        sign ?
                        <div>                        
                            <RegisterM/>
                            <div className="close" onClick={()=>{
                                setSign(false);
                            }}>
                                <XIcon color="white" width="30px"/>
                            </div>
                        </div>                    
                            :
                        <div></div>
                    }
                </div>
                </>
                :
                <>
                <div className="Head" style={{background:background}}>
                    <div className="brandN">Florinfix</div>
                    <ul>
                        <Link to="/home">
                            <li>Home</li>
                        </Link>                    
                        <li>Shipment</li>
                        <div className="search">                        
                            <input type="text" name="search" 
                            placeholder="Search for your Products here"
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}/>   
                            {
                                search ? 
                                <div className="searchResult"></div>:
                                <div></div>
                            }                        
                            <SearchIcon width="20px" color="black"/>                             
                        </div>                        
                        <li onClick={()=>setSign(true)}>SignUp</li>                    
                        <div className="Image">
                            <img src={cart} alt="cart"/>
                            <div className="cartLabel">{count}</div>
                        </div>                        
                    </ul>                                        
                </div>
                <div>
                    {
                        sign ?
                        <div>                        
                            <RegisterD/>
                            <div className="close" onClick={()=>{
                                setSign(false);
                            }}>
                                <XIcon color="white" width="30px"/>
                            </div>
                        </div>                    
                            :
                        <div></div>
                    }
                </div>
                </>
            }             
        </>
    )
};
export default Navbar;

const Category = ({text,link,setCategory}) =>{        
    return(
        <>
            <Link to={link}>
                <div className="item" onClick={()=>{
                    setCategory(false);
                }}><p>{text}</p></div>
            </Link>
        </>
    )
}
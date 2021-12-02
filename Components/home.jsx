import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { Tprd,deals,shopping,dataC,moving} from './APIs/data';
import Carousel from "../Carousel";
import {HSection} from '../styledComponents';

const Home = ({onMobile})=>{      
    const [marginL,setMarginL] = useState(35);   
    const [bg1,setBg1] = useState("rgb(255, 104, 129)");
    const [bg2,setBg2] = useState("rgb(84, 161, 233)");
    const [bg3,setBg3] = useState("rgb(255, 104, 129)");
    const [bg4,setBg4] = useState("rgb(84, 161, 233)");          
    useEffect(()=>{
        if(bg1==="rgb(255, 104, 129)"){
            setTimeout(()=>{
                setBg1("rgb(84, 161, 233)")
            },[8000])
        }        
        else{
            setTimeout(()=>{
                setBg1("rgb(255, 104, 129)")
            },[8000])
        }

        if(bg2==="rgb(84, 161, 233)"){
            setTimeout(()=>{
                setBg2("rgb(255, 104, 129)")
            },[8000])
        }        
        else{
            setTimeout(()=>{
                setBg2("rgb(84, 161, 233)")
            },[8000])
        }

        if(bg3==="rgb(255, 104, 129)"){
            setTimeout(()=>{
                setBg3("rgb(84, 161, 233)")
            },[8000])
        }        
        else{
            setTimeout(()=>{
                setBg3("rgb(255, 104, 129)")
            },[8000])
        }

        if(bg4==="rgb(84, 161, 233)"){
            setTimeout(()=>{
                setBg4("rgb(255, 104, 129)")
            },[8000])
        }        
        else{
            setTimeout(()=>{
                setBg4("rgb(84, 161, 233)")
            },[8000])
        }
    },[bg1,bg2,bg3,bg4])                  
    return(
        <>    
            {
                onMobile?
                <HSection>
                <div className="section">
                    <div className="heroSection">
                        <Carousel data={moving}
                        showLabel={false} setButton={false}/>                                                
                    </div>
                    <div className="choiceSection">
                        <div className="txt">Want something even Amazing?</div>
                        <button>Check This Out</button>
                    </div>
                </div>
                </HSection>            
            :  
             <>
                <HSection>                
                <div className="section">
                    <div className="heroSection">
                        <Carousel data={moving}
                        showLabel={false}/>                                                
                    </div>
                    <div className="choiceSection">
                        <div className="txt">Want something even Amazing?</div>
                        <button>Check This Out</button>
                    </div>
                </div>
                <div className="design" 
                    style={{background:bg1,                 
                    top:"0em", right:"0em",
                    width:"10em", height:"10em", borderBottomLeftRadius:"10em",
                    opacity:"10%"}}/>

                    <div className="design"
                    style={{background:bg2, 
                    top:"28em", left:"-5em",
                    width:"15em", height:"10em", borderTopRightRadius:"9em",
                    opacity:"10%"}}/>

                    <div className="design"
                    style={{background:bg3, 
                    top:"7em", left:"35%",
                    width:"7em", height:"7em", borderRadius:"4em",
                    opacity:"10%"}}/>

                    <div className="design"
                    style={{background:bg4, 
                    top:"25em", left:"70%",
                    width:"7em", height:"7em", borderRadius:"4em",
                    opacity:"10%"}}/>                
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
            <div className="TopItems">
                <div className="txt"> Top selling items</div>
                <div className="topProducts">
                {
                    Tprd.map((items)=>{
                        return <TopProducts {...items} key={items.id}/>
                    })
                }
                </div>                                
            </div>            
            <div className="dealT">
                <h2>Don't miss out on these deals!!</h2> 
                <div className="motionBar"
                style={{marginLeft:`${marginL}%`}}/>
            </div>
            {
                deals.map((items)=>{
                    return <Deals {...items} key={items.id}
                    marginL={marginL} setMarginL={setMarginL}/>
                })
            }        
            <div className="dealT">
                <h2>Check out our Irresistable Categories!!</h2>
                <div className="motionBar"
                style={{marginLeft:`${marginL}%`}}/>
            </div>    
            <div className="Shopping">
                {
                    shopping.map((items)=>{
                        return <Shopping {...items} key={items.id}/>
                    })
                }
            </div>            
        </>
    )
}
export default Home;

const Category = ({text,link}) =>{        
    return(
        <>
            <Link to={link}>
                <div className="Item"><p>{text}</p></div>
            </Link>
        </>
    )
}

const TopProducts = ({img,description,price})=>{
    return(
        <>
            <div className="Pitems">
                <div className="image">
                    <img src={img} alt="img"/>
                </div>
                <div className="description">
                    <p>{description}</p>
                    <p>$ {price}</p>
                </div>
            </div>
        </>
    )
}

const Deals = ({txtA,txtB,txtC,txtD,img1,img2,link,marginL,setMarginL})=>{
    useEffect(()=>{
        if(marginL===35){
            setTimeout(()=>{
                setMarginL(62);
            },[2000])
        }
        else if(marginL===62){
            setTimeout(()=>{
                setMarginL(35);
            },[2000])
        }
    },[marginL])
    return(
        <>
        <div className="Container">
        <div className="Sprd1">
                <div className="prd1">
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
                <div className="prd2">
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


const Shopping =({img,category,description,link})=>{
    return(
        <>
            <div className="Product">
                <div className="image">
                    <img src={img} alt="img"/>
                </div>
                <div className="text">
                    <div className="description">{category}</div>
                    <div className="price">{description}</div>
                </div>
                <Link to={link}>
                    <button>Shop Now</button>
                </Link>                
            </div>
        </>
    )
}


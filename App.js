import React from 'react';
import './index.css';
import Home from './Components/home';
import Navbar from './Navbar';
import Footer from './Footer';
import Fashion from './Components/Fashion';
import Electronics from './Components/Electronics';
import Bproducts from './Components/Bproducts';
import HomeOffices from './Components/Home&Offices';
import HealthBeauty from './Components/Health&Beauty';
import Product from './Components/Product';
import Category from "./Components/Category";
import Item from "./Components/Item";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useEffect, useState } from 'react/cjs/react.development';
function App(){
   const [size,setSize] = useState(window.innerWidth);
   const [onMobile,setOnMobile] = useState(false);
   useEffect(()=>{
      window.addEventListener('resize',()=>{
         setSize(window.innerWidth);
      });
      window.removeEventListener('resize',()=>{
         setSize(window.innerWidth);
      })
      if(size<=470){
         setOnMobile(true);
      }
      else{
         setOnMobile(false);
      }
   },[size]);
     
   return (
         <>
            <Router>
               <Navbar onMobile={onMobile}/>            
               <Switch>
                  <Route exact path="/">
                     <Home onMobile={onMobile}/>
                  </Route>
                  <Route path="/home">
                     <Home onMobile={onMobile}/>
                  </Route>
                  <Route path="/Fashion">
                     <Fashion onMobile={onMobile}/>
                  </Route>
                  <Route path="/Electronics">
                     <Electronics/>
                  </Route>
                  <Route path="/Bproducts">
                     <Bproducts/>
                  </Route>
                  <Route path="/H_O">
                     <HomeOffices/>
                  </Route>
                  <Route path="/H_B">
                     <HealthBeauty/>
                  </Route>
                  <Route path="/categories/:name" children={<Category/>}/>
                  <Route path="/products/:name" children={<Product/>}/>
                  <Route path="/items/:name" children={<Item/>}/>
               </Switch>
               <Footer/>
            </Router>         
         </>
      )
   }

export default App;
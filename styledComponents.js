import styled from "styled-components";

export const Form = styled.div`
        width:100%;
        padding:2em;
        display:flex;
        flex-direction:column;
        gap:2em;
    `
export const Insert = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        color:white;
    `
export const Password = styled.div`
        display:flex;        
        width:100%;
        color:white;
        border:2px solid rgba(255, 104, 129);
        border-radius:20px;       
        background:rgba(0,0,0,0);
        font-size:1em;
    `
export const Input = styled.input`                
        border:2px solid rgba(255, 104, 129);
        border-radius:20px;
        padding:1em;
        color:white;
        background:rgba(0,0,0,0);
        font-size:1em;
    `
export const Label = styled.div`
        color:white;
        width:100%;
        font-weight:bolder;
        display:flex;
        justify-content:flex-start;
        margin-left:2em;
        margin-top:3em;
    `
export const Button = styled.button`
        background:rgba(255,104,129);
        border:2px solid rgba(255, 104, 129);
        width:60%;
        font-weight:bold;
        font-size:1em;
        color:white;
        border-radius:20px;
        padding:0.8em;
    `
export const Reveal = styled.div`
        width:25%;
        display:flex;
        justify-content:center;
        align-items:center;
    `
export const Decide = styled.div`        
        width:100%;
    `
export const Alternate = styled.div`                  
        display:flex;                
        justify-content:space-around;
        align-items:center;
        padding:1em 1em;
        color:white;       
        margin-bottom:0%;                     
    `
export const Container = styled.div`                
        width:100%;
        height:42em;     
        display:flex;
        justify-content: center;
        align-items: center;                     
    `
export const BoxD = styled.div`
        background:rgb(20, 32, 43);
        width:36%;
        height:42em;
        border-radius:20px;        
        transition:2s;        
    `
export const BoxM = styled.div`
        background:rgb(20, 32, 43);
        width:90%;
        height:43em;
        border-radius:20px; 
             
     `
export const Background = styled.div`
        position:fixed;
        top:0;
        width:100%;
        height:100vh;
        background:rgba(0,0,0,0.95);    
        z-index:1200;           
        display:flex;
        justify-content: center;
        align-items: center;       
    `
export const StrokeLane = styled.div`
        width:3%;
        height:42em;
        display:flex;
        justify-content:space-around;        
    `
export const CircleLane = styled.div`
        width:25%;
        height:42em;
        display:flex;
        justify-content:space-around;        
    `
export const SplitLane = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
    `
export const SingleLane = styled.div`
        display:flex;        
        justify-content:center;
        align-items:center;
    `
export const Design = styled.div`        
        border-radius:4em;
        width:7em;
        height:7em;
        background:rgb(84, 161, 233);
        opacity:10%;
    `
export const Line = styled.div`
        border-radius:5px;
        width:0.2em;
        height:18em;
        background:rgba(255,104,129);
        opacity:40%;
    `        
export const ErrorMode = styled.div`
        position:absolute;
        margin:-2.5em auto auto 3%;        
        padding:1em;
        width:inherit;
        height:1em;
        border-radius:10px;
        background:white;
        color:red;
        font-weight:bolder;
        display:flex;
        justify-content:center;
        align-items:center;
    `

// ---------------General Styling for the Page display----------------

export const HSection = styled.div`
    background:rgb(20, 32, 43);
    padding:1em 1em;
`

export const InvisibleBar = styled.div`
    width:100%;
    padding:3em;
`

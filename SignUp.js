import React, {useState} from 'react'
import {Form,Insert,Password,Input,Label,Button,Alternate,
    Reveal} from './styledComponents';
import Modal from "./Modal";
const SignUp = ()=>{
    const [message,setMessage] = useState("");
    const [error,setError] = useState(false);   
    const [modal,setModal] = useState(false); 
    const [checked,setChecked] = useState(false);
    const [pShow,setPShow] = useState(false);
    const [cShow,setCShow] = useState(false);
    const [people,setPeople] = useState([]);
    const [person,setPerson] = useState({firstName:"",lastName:"",email:"",
    password:"",confirmPassword:""})
    const handleChange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPerson((details)=>{
            return({...details,[name]:value});
        })
    }    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(person.firstName && person.lastName && person.email 
            && checked && person.password===person.confirmPassword
            &&person.password!=="")
        {
                const newPerson = {...person,id:new Date().getTime().toString()};
                setPeople((people)=>{
                    return [...people,newPerson]
                });
                console.log(people);
                setPerson({firstName:"",lastName:"",email:"",
                password:"",confirmPassword:""});
                setChecked(false);
        }
        else if(person.firstName===""){
            setModal(false);
            setError(false);
            setMessage("Please enter your first name!!")
            setError(true);
        }
        else if(person.lastName===""){
            setModal(false);
            setError(false);
            setMessage("Please enter your last name!!")
            setError(true);
        }
        else if(person.email===""){
            setModal(false);
            setError(false);
            setMessage("Please enter your email address!!")
            setError(true);
        }
        else if(person.password!==person.confirmPassword){
            setModal(false);
            setError(false);
            setMessage("Password does not match!!")
            setError(true);
        }
        else if(person.password===""){
            setModal(false);
            setError(false);
            setMessage("Password is required!!")
            setError(true);
        }        
        else if(checked===false){
            setModal(false);
            setError(false);
            setMessage("Check the box below!!")
            setError(true);
        }
    }    
    return(
        <>
            <div>                
                {error &&<Modal message={message} setError={setError}
                setModal={setModal} modal={modal}/>}
                <Label><h2>Sign Up</h2></Label>                
                <Form type='form'>
                    <Insert>
                        <Input 
                        className="signup"
                        type="text" 
                        placeholder="First Name" 
                        style={{
                            width:"45%"
                        }}
                        name="firstName"
                        value={person.firstName}
                        onChange={handleChange}
                        />
                        <Input 
                        className="signup"
                        type="text" 
                        placeholder="Last Name" 
                        style={{
                            width:"45%"
                        }}
                        name="lastName"
                        value={person.lastName}
                        onChange={handleChange}
                        />
                    </Insert>
                    <Insert>
                        <Input 
                        className="signup"
                        type="text" 
                        placeholder="Email" 
                        style={{
                            width:"100%"
                        }}
                        name="email"
                        value={person.email}
                        onChange={handleChange}
                        />                        
                    </Insert>                
                        {
                            pShow?
                            <Password>
                                <Input className="password" type="text" 
                                name="password"
                                value={person.password} placeholder="Password" style={{
                                width:"75%", border:"0px solid rgba(0,0,0,0)"}} onChange={handleChange}/>       
                                <Reveal className="reveal" onClick={()=>setPShow(!pShow)}>Hide</Reveal>
                            </Password>
                            :
                            <Password>
                                <Input className="password" type="password" 
                                name="password"
                                value={person.password} placeholder="Password" style={{
                                width:"75%", border:"0px solid rgba(0,0,0,0)"}} onChange={handleChange}/>       
                                <Reveal className="reveal" onClick={()=>setPShow(!pShow)}>Show</Reveal>
                            </Password>                            
                        }                                                             
                    
                        {
                            cShow?
                            <Password>
                                <Input className="password" type="text" 
                                name="confirmPassword"
                                value={person.confirmPassword} placeholder="Confirm Password" style={{
                                width:"75%", border:"0px solid rgba(0,0,0,0)"}} onChange={handleChange}/>       
                                <Reveal className="reveal" onClick={()=>setCShow(!cShow)}>Hide</Reveal>
                            </Password>
                            :
                            <Password>                                
                                <Input className="password" type="password" 
                                name="confirmPassword"
                                value={person.confirmPassword} placeholder="Confirm Password" style={{
                                width:"75%", border:"0px solid rgba(0,0,0,0)"}} onChange={handleChange}/>       
                                <Reveal className="reveal" onClick={()=>setCShow(!cShow)}>Show</Reveal>
                            </Password>                            
                        }             
                    
                    <Insert style={{justifyContent:"space-between", width:"100%"}}>
                        <Input type="checkbox" checked={checked}
                        onChange={()=>setChecked(!checked)}/>
                        <Alternate>
                            <p>I Agree with the <span style={{color:'rgba(255, 104, 129)',
                            fontWeight:'bolder'}}> privacy </span> and 
                            <span style={{color:'rgba(255, 104, 129)',
                            fontWeight:'bolder'}}> policy</span></p >
                        </Alternate>                        
                    </Insert>
                    <Insert style={{justifyContent:"center"}}>
                        <Button type="submit" onClick={handleSubmit}
                        className="sign">Sign Up</Button>
                    </Insert>
                </Form>
            </div>
        </>
    )
}
export default SignUp;
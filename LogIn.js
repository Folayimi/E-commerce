import React, {useState} from 'react'
import {Form,Insert,Password,Input,Label,Button,Reveal} from './styledComponents';
const LogIn = ()=>{
    const [checked,setChecked] = useState(false);
    const [pShow,setPShow] = useState(false);        
    const [person,setPerson] = useState({email:"",password:""})
    const handleChange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPerson((details)=>{
            return({...details,[name]:value});
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }    
    return(
        <>
            <div>
                <Label><h2>Log In</h2></Label>                
                <Form type='form'>                    
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
                    <Insert style={{justifyContent:"space-between", width:"40%"}}>
                        <Input type="checkbox" checked={checked}
                        onChange={()=>setChecked(!checked)}/>
                        <div>
                            <span style={{color:'rgba(255, 104, 129)',
                            fontWeight:'bolder'}}>Remember me</span> 
                        </div>                        
                    </Insert>
                    <Insert style={{justifyContent:"center"}}>
                        <Button type="submit" onClick={handleSubmit}
                        className="sign">Log In</Button>
                    </Insert>
                </Form>
            </div>
        </>
    )
}
export default LogIn;
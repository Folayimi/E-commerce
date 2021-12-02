import React,{useState} from 'react'
import SignUp from './SignUp';
import LogIn from './LogIn'
import {Alternate,Container,Background,BoxD,BoxM,Decide,
StrokeLane,CircleLane,SplitLane,SingleLane,Line,Design} from "./styledComponents";
export const RegisterD = ()=>{
    const [registered,setRegistered] = useState(false);
    return(
        <>            
            <Background>
                <Container>                
                <CircleLane>
                    <SingleLane>
                        <Design/>
                    </SingleLane>
                    <SplitLane>
                        <Design/>
                        <Design/>
                    </SplitLane>                    
                </CircleLane>
                <StrokeLane>
                    <SingleLane>
                        <Line/>
                    </SingleLane>
                    <SplitLane>
                        <Line/>
                        <Line/>
                    </SplitLane>                    
                </StrokeLane>
                <BoxD>
                    {
                        registered ?
                        <Decide>
                            <LogIn/>
                            <Alternate>
                                <p>Don't have an account ?</p>
                                <span style={{color:'rgba(255, 104, 129)',
                                fontWeight:'bolder'}} onClick={()=>{
                                setRegistered(!registered);
                            }}><h3>Sign Up</h3></span>
                            </Alternate>
                        </Decide>
                        :
                        <Decide>
                            <SignUp/>
                            <Alternate>
                                <p>Already have an account ?</p>                                
                                <span style={{color:'rgba(255, 104, 129)',
                                fontWeight:'bolder'}} onClick={()=>{
                                setRegistered(!registered);
                            }}><h3>Log In</h3></span>
                            </Alternate>
                        </Decide>
                    }
                </BoxD>
                <StrokeLane>
                    <SplitLane>
                        <Line/>
                        <Line/>
                    </SplitLane>
                    <SingleLane>
                        <Line/>
                    </SingleLane>                                        
                </StrokeLane>
                <CircleLane>
                    <SplitLane>
                        <Design/>
                        <Design/>
                    </SplitLane>
                    <SingleLane>
                        <Design/>
                    </SingleLane>                                        
                </CircleLane>                                
                </Container>
            </Background>
        </>
    )
}


export const RegisterM = ()=>{
    const [registered,setRegistered] = useState(false);
    return(
        <>            
            <Background>
                <Container>                                
                <StrokeLane>
                    <SingleLane>
                        <Line/>
                    </SingleLane>
                    <SplitLane>
                        <Line/>
                        <Line/>
                    </SplitLane>                    
                </StrokeLane>
                <BoxM>
                    {
                        registered ?
                        <Decide>
                            <LogIn/>
                            <Alternate>
                                <p>Don't have an account ?</p>
                                <span style={{color:'rgba(255, 104, 129)',
                                fontWeight:'bolder'}} onClick={()=>{
                                setRegistered(!registered);
                            }}><h3>Sign Up</h3></span>
                            </Alternate>
                        </Decide>
                        :
                        <Decide>
                            <SignUp/>
                            <Alternate>
                                <p>Already have an account ?</p>
                                <span style={{color:'rgba(255, 104, 129)',
                                fontWeight:'bolder'}} onClick={()=>{
                                setRegistered(!registered);
                            }}><h3>Log In</h3></span>
                            </Alternate>
                        </Decide>
                    }
                </BoxM>
                <StrokeLane>
                    <SplitLane>
                        <Line/>
                        <Line/>
                    </SplitLane>
                    <SingleLane>
                        <Line/>
                    </SingleLane>                                        
                </StrokeLane>                                                
                </Container>
            </Background>
        </>
    )
}
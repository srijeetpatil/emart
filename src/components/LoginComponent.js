import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import {UserDatabase} from '../data/userData';

function LoginComponent(props){   
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        if(!validEmail(e.target.value)){
            document.getElementById("emailError").innerHTML = '<h6 style="text-align: center">' + '* Invalid Email' + '</h6>';
        }
        else{
            document.getElementById("emailError").innerHTML = '';
        }
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        if(e.target.value.length === 0){
            document.getElementById("passwordError").innerHTML = '<h6 style="text-align: center">' + '* Required' + '</h6>';
        }
        else{
            document.getElementById("passwordError").innerHTML = '';
        }
        setPassword(e.target.value);
    }

    const handleSubmit = (email, password) => {
        if(!validEmail(email)){
            document.getElementById("emailError").innerHTML = '<h6 style="text-align: center">' + '* Invalid Email' + '</h6>';
        }    
        if(password.length === 0){
            document.getElementById("passwordError").innerHTML = '<h6 style="text-align: center">' + '* Required' + '</h6>';
        }
        else{
            var emailCode = "";
            for(var i = 0; i < email.length; i++){
                if(email.charAt(i) === "."){
                    emailCode = email.slice(0, i);
                    break;
                }
            }  
            var exists = UserDatabase("Users/" +  emailCode).on('value', function(snapshot){
                if(snapshot.val() != null){
                    return 1;
                }
                return 0;
            })
            if(exists === 0){
                document.getElementById("loginError").innerHTML = '<h6 style="text-align: center">' + 'Email id doesnt exist' + '</h6>';
            }
            else{
                UserDatabase("Users/" + emailCode + "/password").on('value', function(snapshot){
                    if(snapshot.val() === password){                        
                        localStorage.setItem("logged", JSON.stringify(emailCode));                        
                        props.loginCancelled();
                        window.location.reload(false);
                    }
                    else{                        
                        document.getElementById("loginError").innerHTML = '<h6 style="text-align: center">' + 'Invalid email or password' + '</h6>';
                    }
                })                
            }
        }
    }

    return(
        <div style={{width:"100%", paddingTop:"100px"}}>
            <div className="loginObject"> 
                <div className="row" style={{marginLeft:"15px", marginRight:"15px"}}> 
                    <h3 className="basic-font" style={{color:"#2778f3", textAlign:"center"}}>Login</h3>
                    <i className="fa fa-times fa-lg" style={{marginLeft:"auto", marginTop:"10px", color:"whitesmoke"}} onClick={() => {
                        return(
                            props.loginCancelled()
                        );
                    }}></i>
                </div>                
                <div style={{padding:"15px"}}>                     
                    <div style={{paddingTop:"10px"}}>
                        <input type="email" placeholder="Email" style={{width:"70%", marginLeft:"auto", marginRight:"auto", display:"block", borderRadius:"5px", border:"0px"}} onChange={handleEmailChange}></input>
                    </div> 
                    <div id="emailError" className="text-danger"></div>
                    <div style={{paddingTop:"10px"}}>
                        <input type="password" placeholder="Password" style={{width:"70%", marginLeft:"auto", marginRight:"auto", display:"block", borderRadius:"5px", border:"0px"}} onChange={handlePasswordChange}></input>
                    </div>
                    <div id="passwordError" className="text-danger"></div>
                    <Button color="info" style={{marginLeft:"auto", marginRight:"auto", display:"block", marginTop:"10px", borderRadius:"5px", color:"floralwhite"}} onClick={() => {
                        handleSubmit(email, password);
                    }}>Log in</Button> 
                    <div id="loginError" className="text-danger"></div>
                    <p style={{marginLeft:"auto", marginRight:"auto", display:"block", paddingTop:"10px", textAlign:"center", color:"floralwhite"}}>Or</p>                    
                    <Link to="/signup" style={{textDecoration:"none"}} >
                        <Button color="info" style={{color:"floralwhite",marginLeft:"auto", marginRight:"auto", display:"block", marginTop:"10px", borderRadius:"5px", color:"floralwhite"}} onClick={() => {                            
                            return(                                
                                props.loginCancelled()
                            );
                            }}>
                        Sign up
                        </Button> 
                    </Link>                        
                </div>                                            
            </div> 
        </div>
    );
}

export default LoginComponent;
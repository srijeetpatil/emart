import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import {UserDatabase} from '../data/userData';
import App from '../App';

function SignUpComponent() {  
    const validPhone = (val) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(val);
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [loginSuccess, setLogin] = useState(false);  
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address, setAddress] = useState("");    
    const [phone, setPhone] = useState("");

    const handleFirstName = (e) => {
        if(e.target.value.length === 0){
            document.getElementById("firstError").innerHTML = '<h6 style="text-align: center">' + '* Required' + '</h6>';
        }
        else{
            document.getElementById("firstError").innerHTML = '';
        }
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        if(e.target.value.length === 0){
            document.getElementById("lastError").innerHTML = '<h6 style="text-align: center">' + '* Required' + '</h6>';
        }
        else{
            document.getElementById("lastError").innerHTML = '';
        }
        setLastName(e.target.value);
    }
    const handleAddress = (e) => {
        if(e.target.value.length === 0){
            document.getElementById("addressError").innerHTML = '<h6 style="text-align: center">' + '* Required' + '</h6>';
        }
        else{
            document.getElementById("addressError").innerHTML = '';
        }
        setAddress(e.target.value);
    }
    const handleEmailChange = (e) => {
        if(!validEmail(e.target.value)){
            document.getElementById("invalid").innerHTML = '<h6 style="text-align: center">' + '* Invalid Email' + '</h6>';
        }
        else{
            document.getElementById("invalid").innerHTML = '';
        }
        setEmail(e.target.value);
    }
    const handlePasswordChange1 = (e) => {
        setPassword(e.target.value);
    }
    const handlePasswordChange2 = (e) => {
        if(e.target.value != password){
            document.getElementById("error").innerHTML = '<h6 style="text-align:center">' + "Passwords don't match" +'</h6>';
        }
        else{
            document.getElementById("error").innerHTML = "";
        }
    }

    const handlePhone = (e) => {
        if(!validPhone(e.target.value)){
            document.getElementById("phoneError").innerHTML = '<h6 style="text-align: center">' + '* Invalid phone number' + '</h6>'
        }
        else{
            document.getElementById("phoneError").innerHTML = '';
        }
        setPhone(e.target.value);
    }

    const handleClicked = (email, password, firstname, lastname, address, phone) => {
        if(!validEmail(email)){
            document.getElementById("invalid").innerHTML = '<h6 style="text-align: center">' + 'Invalid email' + '</h6>'
        }
        if(firstname.length === 0){
            document.getElementById("firstError").innerHTML = '<h6 style="text-align: center">' + '* Required' + '</h6>'
        }
        if(lastname.length === 0){
            document.getElementById("lastError").innerHTML = '<h6 style="text-align: center">' + '* Required' + '</h6>'
        }
        if(address.length === 0){
            document.getElementById("addressError").innerHTML = '<h6 style="text-align: center">' + '* Required' + '</h6>'
        }
        if(phone.length === 0){
            document.getElementById("phoneError").innerHTML = '<h6 style="text-align: center">' + '* Required' + '</h6>'
        }
        else{
            var emailCode = "";
            for(var i = 0; i < email.length; i++){
                if(email.charAt(i) === "."){
                    emailCode = email.slice(0, i);
                    break;
                }
            }            
            var exists = UserDatabase("Users/" + emailCode).on('value', function(snapshot) {                
                if(snapshot.val() != null){
                    return 1;
                }
                return 0;
            })
            if(exists === 1){                
                document.getElementById("invalid2").innerHTML = '<h6 style="text-align: center">' + 'This Email already exists in our database' + '</h6>'
            }
            else{                                                         
                var loginObject = {
                    email: email,
                    password: password,
                    phone: phone,
                    firstname: firstname,
                    lastname: lastname,
                    address: address    
                };                
                UserDatabase("Users/" + emailCode).set(loginObject);                               
                localStorage.setItem("logged", JSON.stringify(emailCode)); 
                setLogin(true);                                               
            }
        }
    }
    if(loginSuccess){                
        return(
            <div>                
                <Redirect to="/emart"/>
            </div>
        );
    }
    else{
        return(
            <div style={{backgroundImage: "linear-gradient(#000000, #207693)", width:"100%", height:"100%", paddingTop:"10%", paddingBottom:"10%"}}>
                <div className="loginBox" style={{display:"block", margin:"auto", borderStyle:"solid", borderWidth:"thin", borderRadius:"2%", borderColor:"#f0edf3"}}>
                    <div style={{padding:"15px 15px 15px 15px"}}>
                        <h4 className="basic-font" style={{textAlign:"center", color:"floralwhite"}}>Sign up</h4>
                        <input type="text" placeholder="Email" style={{margin:"auto", display:"block", borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                        , width:"80%", marginTop:"50px"}} onChange={handleEmailChange}/>
                        <div id="invalid" className="text-danger"></div>                     
                        <div>
                            <div style={{margin:"auto", display:"block", width:"80%"}}>
                                <input type="text" placeholder="First name" style={{borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                                , width:"60%", marginTop:"50px"}} onChange={handleFirstName}/>
                                <div id="firstError" className="text-danger"></div>
                                <input type="text" placeholder="Last name" style={{borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                                , width:"60%", marginTop:"50px", right:0, display:"block"}} onChange={handleLastName}/>
                                <div id="lastError" className="text-danger"></div>
                                <input type="text" placeholder="Mobile/Phone number" style={{borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                                , width:"60%", marginTop:"50px", right:0, display:"block"}} onChange={handlePhone}/>
                                <div id="phoneError" className="text-danger"></div>
                            </div>
                        </div>      
                        <textarea type="textarea" placeholder="Address" style={{margin:"auto", display:"block", borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                        , width:"80%", marginTop:"50px"}} onChange={handleAddress}/>     
                        <div id="addressError" className="text-danger"></div>                                                       
                        <input type="password" placeholder="Password" style={{margin:"auto", display:"block", borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                        , width:"80%", marginTop:"50px"}} onChange={handlePasswordChange1}/>                    
                        <input type="password" placeholder="Confirm Password" style={{margin:"auto", display:"block", borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                        , width:"80%", marginTop:"50px"}} onChange={handlePasswordChange2}/>
                        <div id="error" className="text-danger"></div>                    
                        <Button color="info" style={{margin:"auto", display:"block", marginTop:"50px"}} onClick={() => {
                            handleClicked(email, password, firstname, lastname, address, phone);
                        }}>Sign in</Button>  
                        <div id="invalid2" className="text-danger"></div>                                                                          
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpComponent;
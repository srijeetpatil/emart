import React from 'react';

function LoginComponent(){
    return(
        <div style={{width:"100%", paddingTop:"100px"}}>
            <div className="loginObject" style={{margin:"auto"}}> 
                <h3 className="basic-font" style={{color:"#2778f3", textAlign:"center", borderRadius:"5px 5px 0px 0px"}}>Login</h3>
                <div style={{padding:"15px"}}>                     
                    <div style={{paddingTop:"10px"}}>
                        <input type="text" placeholder="Email" style={{width:"70%", marginLeft:"auto", marginRight:"auto", display:"block", borderRadius:"5px", border:"0px"}}></input>
                    </div> 
                    <div style={{paddingTop:"10px"}}>
                        <input type="text" placeholder="Password" style={{width:"70%", marginLeft:"auto", marginRight:"auto", display:"block", borderRadius:"5px", border:"0px"}}></input>
                    </div>
                    <button style={{marginLeft:"auto", marginRight:"auto", display:"block", marginTop:"10px", borderRadius:"5px", backgroundColor:"#2778f3", color:"floralwhite"}}>Log in</button> 
                    <p style={{marginLeft:"auto", marginRight:"auto", display:"block", paddingTop:"10px", textAlign:"center", color:"floralwhite"}}>Or login with</p>
                    <div className="row" style={{paddingTop:"10px", justifyContent:"center"}}>
                        <span className="fa fa-google fa-lg" style={{marginLeft:"10px", color:"#df0a0a"}}></span>
                        <span className="fa fa-facebook fa-lg" style={{marginLeft:"10px", color:"#2778f3"}}></span>
                        <span className="fa fa-instagram fa-lg" style={{marginLeft:"10px", color:"#b71a96"}}></span>                        
                    </div>
                </div>                                            
            </div> 
        </div>
    );
}

export default LoginComponent;
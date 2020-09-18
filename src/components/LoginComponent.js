import React from 'react';

function LoginComponent(){
    return(
        <div style={{width:"100%", backgroundColor: 'transparent', paddingTop:"100px"}}>
            <div className="loginObject" style={{margin:"auto"}}> 
                <h3 className="basic-font" style={{color:"#0e09e3", textAlign:"center", borderRadius:"5px 5px 0px 0px"}}>Login</h3>
                <div style={{padding:"5px"}}>                     
                    <div style={{paddingTop:"10px"}}>
                        <input type="text" placeholder="Email" style={{width:"60%", marginLeft:"auto", marginRight:"auto", display:"block", borderRadius:"5px", border:"0px"}}></input>
                    </div> 
                    <div style={{paddingTop:"10px"}}>
                        <input type="text" placeholder="Password" style={{width:"60%", marginLeft:"auto", marginRight:"auto", display:"block", borderRadius:"5px", border:"0px"}}></input>
                    </div> 
                </div>                                            
            </div> 
        </div>
    );
}

export default LoginComponent;
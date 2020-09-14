import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Result extends Component{
    constructor(props){
        super(props);
    }    
    render(){                
        const array = this.props.items.map((item) => { 
            var source = require('../' + item.image);            
            return(
                <div className="container">           
                    <NavLink className="nav-link" to={`/itemDetail/${item.prod_id}`}>          
                        <div className="row" style={{width:"100%", marginRight:"10px", marginLeft:"10px"}}>
                            <div className="resultItem1">
                                <img src={source} style={{width:"100%", objectFit:"cover"}}></img>                          
                            </div>                        
                            <div className="resultItem2" style={{marginLeft:"10px"}}>                            
                                <h4 style={{color:"black"}}>{item.name}</h4>
                                <h4 style={{color:"maroon"}}>{item.price}</h4>                                                                                                                            
                            </div>                        
                        </div> 
                        <div className="container">
                            <hr></hr>                         
                        </div>  
                    </NavLink>                                                    
                </div>                
            );
        })
        return(                
            <div style={{paddingTop:"10px"}}>                
                {array}                                
                <hr></hr>
            </div>                                                                         
        );
    }
}

export default Result;
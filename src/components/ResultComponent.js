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
                <div style={{maxHeight:"250px"}}>           
                    <NavLink className="nav-link" to={`/itemDetail/${item.prod_id}`}> 
                        <div className="row"> 
                            <div className="col-md-2 resultAdjustment">
                                <img className="resultImg" src={source} style={{objectFit:"contain"}}></img>
                            </div>                                                                                   
                            <div className="col-md-4 resultText" style={{paddingLeft:"10px"}}>
                                <h5 style={{color:"black"}}>{item.name}</h5>                            
                                <h5 style={{color:"#bb0b0b"}}>{item.price}</h5>                               
                            </div>
                        </div>                                                                                                                            
                    </NavLink> 
                    <div className="container" style={{marginBottom:"0px"}}>
                        <hr></hr>
                    </div>                                                                       
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
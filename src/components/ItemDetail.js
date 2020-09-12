import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardText, Button} from 'reactstrap';

class ItemDetail extends Component{
    constructor(props){
        super(props);        
    }
    render(){   
        var source = require('../' + this.props.item.image);                                      
        return(
            <div className="container"> 
                <div className="row" style={{paddingTop:"10px"}}>
                    <div className="itemDetail" style={{marginLeft:"10px", marginRight:"10px"}}>                     
                        <img className="itemImage" src={source} style={{objectFit:"contain"}}></img>                                                                                    
                    </div>
                    <div className="itemDetail" style={{marginLeft:"10px", marginRight:"10px"}}>
                        <h2>{this.props.item.name}</h2> 
                        <p style={{fontSize:"14px"}}><b>Price</b><h4 style={{color:"#bb0b0b"}}>{this.props.item.price}</h4></p>
                        <h3 className="basic-font">Description</h3>
                        <hr></hr>
                        <p style={{fontSize:"14px"}}>{this.props.item.description}</p>                            
                    </div> 
                </div>                                                                  
            </div>            
        );
    }
}

export default ItemDetail;
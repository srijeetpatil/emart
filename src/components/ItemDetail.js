import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardText, Button} from 'reactstrap';

class ItemDetail extends Component{
    constructor(props){
        super(props);        
    }
    render(){   
        var source = require('../' + this.props.item.image);                                                     
        return(
            <div style={{marginTop:"10px",marginLeft:"10px", marginRight:"10px"}}>                    
                <Card style={{borderRadius:"0px"}}> 
                    <div className="row" style={{marginTop:"15px", marginLeft:"15px",
                             marginBottom:"15px"}}>
                        <div className="col-md-5"> 
                            <CardImg src={source} style={{objectFit:"contain"}}></CardImg>                                              
                        </div>
                        <div>
                            <h2>{this.props.item.name}</h2> 
                            <h5>{this.props.item.price}</h5>
                            <h3 className="basic-font">Description</h3>
                            <hr></hr>
                            <CardText>{this.props.item.description}</CardText>                            
                        </div>
                    </div>                       
                </Card>                
                <hr></hr>
            </div>            
        );
    }
}

export default ItemDetail;
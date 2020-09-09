import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardText, Button} from 'reactstrap';

class ItemDetail extends Component{
    constructor(props){
        super(props);        
    }
    render(){   
        var source = require('../' + this.props.item.image);                                                     
        return(
            <div className="itemDetail">                    
                <Card style={{borderRadius:"0px"}}> 
                    <div className="itemDetail">
                        <div className="row">
                            <div className="col-md-5"> 
                                <CardImg src={source} style={{objectFit:"contain"}}></CardImg>                                              
                            </div>
                            <div className="itemDetail">
                                <h2>{this.props.item.name}</h2> 
                                <h4 style={{color:"maroon"}}>{this.props.item.price}</h4>
                                <h3 className="basic-font">Description</h3>
                                <hr></hr>
                                <CardText>{this.props.item.description}</CardText>                            
                            </div>
                        </div>                        
                    </div>                       
                </Card>                
                <hr></hr>
            </div>            
        );
    }
}

export default ItemDetail;
import React, {Component} from 'react';

class ItemDetail extends Component{
    constructor(props){
        super(props);        
    }
    render(){   
        var source = require('../' + this.props.item.image);                                      
        return(
            <div className="container"> 
                <div className="row" style={{paddingTop:"10px"}}>
                    <div className="col-md-6">
                        <img className="itemImage" src={source}></img>
                    </div>
                    <div className="col-md-6">
                        <h4>{this.props.item.name}</h4>
                        <p><b>Price </b><h5 style={{color:"#bb0b0b"}}>{this.props.item.price}</h5></p>
                        <h4 className="basic-font">Decription</h4>
                        <p style={{fontSize:"14px"}}>{this.props.item.description}</p>
                    </div>
                </div>                                                                  
            </div>            
        );
    }
}

export default ItemDetail;
import React, {Component} from 'react';
import Search from './SearchBarComponent';
import SimilarProducts from './SimilarProducts';

class ItemDetail extends Component{
    constructor(props){
        super(props);        
    }
    render(){           
        var source = require('../' + this.props.item.image);                                      
        return(
            <div>                
                <Search color={"#f0edf3"}/>                              
                <div className="container">                 
                    <div className="row" style={{paddingTop:"40px"}}>
                        <div className="col-md-6">
                            <img className="itemImage" src={source}></img>
                        </div>
                        <div className="col-md-6">                            
                            <h4>{this.props.item.name}</h4>
                            <div className="row" style={{backgroundColor:"#f0edf3"}}>
                                <div className="ml-3">
                                    <p><b>Price </b><h5 style={{color:"#bb0b0b"}}>{this.props.item.price}</h5></p>
                                </div>
                                <div className="basic-font ml-3" style={{marginTop:"auto", marginBottom:"auto"}}>
                                    Add to Cart <span className="fa fa-shopping-cart fa-lg" style={{color:"#0e09e3"}}></span>
                                </div> 
                                <div className="basic-font ml-3" style={{marginTop:"auto", marginBottom:"auto"}}>
                                    Add to Wishlist <span className="fa fa-heart fa-lg" style={{color:"red"}}></span>
                                </div>                                                                                                                             
                            </div>                            
                            <h4 className="basic-font">Decription</h4>
                            <p style={{fontSize:"14px"}}>{this.props.item.description}</p>
                        </div>
                    </div>                                                                                      
                </div>    
                <h4 style={{textAlign:"center"}}>Similar Products</h4> 
                <hr></hr> 
                <div style={{display:"flex"}}>                                        
                    <SimilarProducts category={this.props.item.category} ignore={this.props.item.prod_id}/>
                </div> 
                <hr></hr>          
            </div>                        
        );
    }
}

export default ItemDetail;
import React, {Component, useState} from 'react';
import Search from './SearchBarComponent';
import SimilarProducts from './SimilarProducts';
import { Alert, Tooltip, Spinner, Badge} from "reactstrap";
import { Link } from 'react-router-dom';
import {UserDatabase} from '../data/userData';

class ItemDetail extends Component{
    constructor(props){
        super(props);    
        this.state = {
            tooltipOpen: false,
            tooltipOpen2: false,
            alertVisible: false,
            type: "",
            dangerAlert: false
        }    
    }

    toggle1 = () => {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
    toggle2 = () => {
        this.setState({
            tooltipOpen2: !this.state.tooltipOpen2
        });
    }

    toggleAlert = (type) => {        
        this.setState({
            alertVisible: true,
            type: type
        })
    }

    render(){                           
        if(this.props.item.name === "Loading"){
            return(
                <div style={{width:"100%", height:"100vh"}}>
                    <h1 style={{textAlign:"center", margin:"auto", display:"block"}}>Loading</h1>
                    <div ><Spinner color="dark" style={{margin:"auto", display:"block"}}></Spinner></div>
                </div>
            );
        }
        else{            
            var source = this.props.item.image;    
            var off = "";
            if(this.props.item.off){
                off = this.props.item.off + " off";
            }                                    
            return(
                <div>                
                    <Search color={"#f0edf3"}/>                              
                    <div className="container">                              
                        <div className="row" style={{paddingTop:"40px"}}>
                            <div className="col-md-6">
                                <img className="itemImage" src={source}></img>
                            </div>
                            <div className="col-md-6">                            
                                <h4>{this.props.item.name}   <Badge color="danger">{off}</Badge></h4>
                                <div className="row" style={{backgroundColor:"#f0edf3"}}>
                                    <div className="ml-3">
                                        <p><b>Price </b><h5 style={{color:"#bb0b0b"}}>{this.props.item.price}</h5></p>
                                    </div>
                                    <Link style={{textDecoration:"none", marginTop:"auto", marginBottom:"auto"}} onClick={() => {
                                        var logged = JSON.parse(localStorage.getItem("logged"));
                                        if(logged.length > 0){
                                            this.props.item.quantity = 1;
                                            UserDatabase("Users/" + logged + "/cart/" + this.props.item.prod_id + "/").set(this.props.item);
                                            this.toggleAlert("cart"); 
                                        } 
                                        else{
                                            this.setState({
                                                dangerAlert: true
                                            })
                                        }                                      
                                }}>
                                        <div className="basic-font ml-3" id="addToCart">
                                            <span className="fa fa-shopping-cart fa-lg" style={{color:"#0e09e3"}}></span>
                                        </div>
                                    </Link> 
                                    <Tooltip target="addToCart" placement="bottom" isOpen={this.state.tooltipOpen} toggle={this.toggle1}>
                                        Add to cart
                                    </Tooltip>
                                    <Link style={{marginTop:"auto", marginBottom:"auto", textDecoration:"none"}} onClick={() => {
                                        var logged = JSON.parse(localStorage.getItem("logged"));
                                        if(logged.length > 0){                                            
                                            UserDatabase("Users/" + logged + "/wishlist/" + this.props.item.prod_id + "/").set(this.props.item);
                                            this.toggleAlert("wishlist"); 
                                        } 
                                        else{
                                            this.setState({
                                                dangerAlert: true
                                            })
                                        }                                           
                                }}>
                                        <div className="basic-font ml-3" id="addToWishlist">
                                            <span className="fa fa-heart fa-lg" style={{color:"red"}}></span>
                                        </div>
                                    </Link>       
                                    <Tooltip target="addToWishlist" placement="bottom" isOpen={this.state.tooltipOpen2} toggle={this.toggle2}>
                                        Add to your wishlist
                                    </Tooltip>                                                                                                                  
                                </div>         
                                <Alert color="success" isOpen={this.state.alertVisible} toggle={() => {
                                    this.setState({
                                        alertVisible: false
                                    })
                                }}>This product has been added to your {this.state.type}</Alert>
                                <Alert color="danger" isOpen={this.state.dangerAlert} toggle={() => {
                                    this.setState({
                                        dangerAlert: false
                                    })
                                }}>You have to log in first !</Alert>                   
                                <h4 className="basic-font">Decription</h4>
                                <p style={{fontSize:"14px"}}>{this.props.item.description}</p>
                            </div>
                        </div>                                                                                      
                    </div>    
                    <h4 style={{textAlign:"center"}}>Similar Products</h4>                     
                    <div style={{display:"flex", backgroundColor:"#f0edf3"}}>                                        
                        <SimilarProducts category={this.props.item.category} ignore={this.props.item.prod_id} mainCategory={this.props.mainCategory}/>
                    </div> 
                    <hr></hr>          
                </div>                        
            );
        }
    }
}

export default ItemDetail;
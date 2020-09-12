import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Jumbotron, Button, CardLink} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import database from '../data/database';

class Promos extends Component{ 
    constructor(props){
        super(props);
    }
    getitems(){
        const items = []        
        for(var i = 0; i < database.electronics.length; i++){
            if(database.electronics[i].featured === 1){
                items.push(database.electronics[i]);
            }
        }        
        for(var i = 0; i < database.men.length; i++){
            if(database.men[i].featured === 1){
                items.push(database.men[i]);
            }
        }               
        for(var i = 0; i < database.women.length; i++){
            if(database.women[i].featured === 1){
                items.push(database.women[i]);
            }
        } 
        for(var i = 0; i < database.kids.length; i++){
            if(database.kids[i].featured === 1){
                items.push(database.kids[i]);
            }
        } 
        for(var i = 0; i < database.sports.length; i++){
            if(database.sports[i].featured === 1){
                items.push(database.sports[i]);
            }
        } 
        for(var i = 0; i < database.books.length; i++){
            if(database.books[i].featured === 1){
                items.push(database.books[i]);
            }
        }         
        return items;      
    }   
    render(){
        const arr = this.getitems();
        const items = arr.map((item) => {
            var source = require('../' + item.image);                        
            return(
                <div className="mt-2 cardItem">                    
                    <Card style={{height:"100%", borderRadius:"0px"}}>
                        <NavLink className="nav-link" to={`/itemDetail/${item.prod_id}`}>                                                    
                            <CardBody>                            
                                <CardImg style={{objectFit:"contain"}} src={source}></CardImg>                                
                                <div style={{textAlign: "center", color:"black"}}>
                                    {item.name}                                
                                </div> 
                                <div style={{textAlign: "center", textDecorationLine: "line-through", color:"maroon"}}>
                                    <h6>{item.price}</h6>                                
                                </div>                                                       
                            </CardBody> 
                        </NavLink>                                              
                    </Card>                    
                </div>                    
            );                      
        });
        return(
            <div className="container">                
                    <div className="row" style={{justifyContent:"center", alignItems:"center"}}>
                        <h1 className="basic-font col-md-3">E MART</h1>
                        <div className="col-md-6">                                                        
                            <input className="search" type="text" placeholder="Search not developed yet"></input>                                                       
                        </div>                        
                    </div>                                      
                <div className="row" style={{marginTop:"100px", marginBottom:"15px"}}>   
                    <h4 className="col-12 basic-font">Products you might be interested in...</h4>                   
                    {items}
                </div>
            </div>            
        );
    }
}

export default Promos;
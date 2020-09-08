import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Jumbotron, Button, CardLink} from 'reactstrap';
import {Link} from 'react-router-dom';
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
                        <CardTitle></CardTitle>                         
                        <CardBody>
                            <Link to={`/itemDetail/${item.prod_id}`}>
                                <CardImg style={{objectFit:"contain"}} src={source}></CardImg>
                                </Link>
                                <div style={{textAlign: "center"}}>
                                    {item.name}                                
                                </div> 
                                <div style={{textAlign: "center", textDecorationLine: "line-through"}}>
                                    {item.price}
                                </div>                                                       
                        </CardBody>                                               
                    </Card>
                </div>                    
            );                      
        });
        return(
            <div className="container">                
                    <div className="row">
                        <h1 className="basic-font col-sm-4">E MART</h1>
                        <div className="col-sm-4">                            
                            <input className="search mt-3" type="text" placeholder="Search Not developed Yet"></input>
                            <Button className="mb-1">
                                <span className="fa fa-search"></span>
                            </Button>                            
                        </div>                        
                    </div>                   
                <div className="row" style={{marginTop:"150px", marginBottom:"15px"}}> 
                    {items}
                </div>
            </div>            
        );
    }
}

export default Promos;
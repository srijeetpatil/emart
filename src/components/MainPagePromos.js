import React, {Component} from 'react';
import {electronics} from '../data/electronics';
import {men} from '../data/men';
import {women} from '../data/women';
import {kids} from '../data/kids';
import {sports} from '../data/sports';
import {books} from '../data/books';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Jumbotron, Button, CardLink} from 'reactstrap';
import {Link} from 'react-router-dom';

class Promos extends Component{ 
    constructor(props){
        super(props);
    }
    getitems(){
        const items = []        
        for(var i = 0; i < electronics.length; i++){
            if(electronics[i].featured === 1){
                items.push(electronics[i]);
            }
        }        
        for(var i = 0; i < men.length; i++){
            if(men[i].featured === 1){
                items.push(men[i]);
            }
        }               
        for(var i = 0; i < women.length; i++){
            if(women[i].featured === 1){
                items.push(women[i]);
            }
        } 
        for(var i = 0; i < kids.length; i++){
            if(kids[i].featured === 1){
                items.push(kids[i]);
            }
        } 
        for(var i = 0; i < sports.length; i++){
            if(sports[i].featured === 1){
                items.push(sports[i]);
            }
        } 
        for(var i = 0; i < books.length; i++){
            if(books[i].featured === 1){
                items.push(books[i]);
            }
        }         
        return items;      
    }   
    render(){
        const arr = this.getitems();
        const items = arr.map((item) => {
            var source = require('../' + item.image); 
            var it = item;            
            return(
                <div className="col-md-3 mt-2">
                    <Card style={{height:"100%", borderRadius:"0px"}}>
                        <CardTitle></CardTitle>                         
                        <CardBody>
                            <Link to={`/itemDetail/${item.prod_id}`}>
                                <CardImg style={{height:"50%", objectFit:"contain"}} top src={source}></CardImg>
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
                <div className="row" style={{marginTop:"150px"}}> 
                    {items}
                </div>
            </div>            
        );
    }
}

export default Promos;
import React, {Component} from 'react';
import {electornics} from '../data/electronics';
import {men} from '../data/men';
import {women} from '../data/women';
import {kids} from '../data/kids';
import {sports} from '../data/sports';
import {books} from '../data/books';
import {Card, CardBody, CardImg, CardSubtitle} from 'reactstrap';

class Promos extends Component{ 
    getitems(){
        const items = []        
        for(var i = 0; i < electornics.length; i++){
            if(electornics[i].featured === 1){
                items.push(electornics[i]);
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
            return(
                <div className="col-md-3 mt-2">
                    <Card>
                        <CardSubtitle>{item.name}</CardSubtitle>
                        <CardBody>
                            <CardImg top src={source}></CardImg>
                            {item.description}
                        </CardBody>
                    </Card>
                </div>                    
            );                      
        });
        return(
            <div className="container">
                <div className="row">
                    {items}
                </div>
            </div>            
        );
    }
}

export default Promos;
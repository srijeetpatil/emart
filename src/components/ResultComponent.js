import React, {Component} from 'react';
import database from '../data/database';
import {Link, NavLink} from 'react-router-dom';

class Result extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const num = parseInt(this.props.arr);        
        const items = () => {
            switch(num){
                case 1:
                    return database.electronics;               
                case 2:
                    return database.men;
                case 3:
                    return database.women;
                case 4:
                    return database.kids;
                case 5:
                    return database.sports;
                case 6:
                    return database.books;
            }    
        }  
        var itemarr = items();             
        const array = itemarr.map((item) => { 
            var source = require('../' + item.image);            
            return(
                <div>           
                    <NavLink className="nav-link" to={`/itemDetail/${item.prod_id}`}>          
                        <div className="row" style={{width:"100%", marginRight:"10px", marginLeft:"10px"}}>
                            <div className="resultItem1">
                                <img src={source} style={{width:"100%", objectFit:"cover"}}></img>                          
                            </div>                        
                            <div className="resultItem2" style={{marginLeft:"10px"}}>                            
                                <h4 style={{color:"black"}}>{item.name}</h4>
                                <h4 style={{color:"maroon"}}>{item.price}</h4>                                                                                                                            
                            </div>                        
                        </div> 
                        <div className="container">
                            <hr></hr>                         
                        </div>  
                    </NavLink>                                                    
                </div>                
            );
        })
        return(                
            <div style={{paddingTop:"10px"}}>                
                {array}                                
                <hr></hr>
            </div>                                                                         
        );
    }
}

export default Result;
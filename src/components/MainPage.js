import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Promos from './MainPagePromos';
import CarouselComponent from './CarouselComponent';
import {Switch, Redirect, Route, withRouter} from 'react-router-dom';
import Result from './ResultComponent';
import ItemDetail from './ItemDetail';
import database from '../data/database';
import HeaderBig from './HeaderSample';

function Main(){  
    const sendResult = ({match}) => {                   
        return(
        <Result arr={match.params.arr}/>
        );        
    }
    const sendItem = ({match}) => {
        var prodId = match.params.prod_id.slice(0, 4);
        var item;       
        if(prodId === "elec"){
            for(var i = 0; i < database.electronics.length; i++){                
                var pro = database.electronics[i].prod_id;
                if(JSON.stringify(match.params.prod_id) === JSON.stringify(pro)){
                    item = database.electronics[i];     
                    break;              
                }               
            }
        }
        else if(prodId === "mens"){
            for(var i = 0; i < database.men.length; i++){                
                var pro = database.men[i].prod_id;
                if(JSON.stringify(match.params.prod_id) === JSON.stringify(pro)){
                    item = database.men[i];     
                    break;              
                }               
            }
        }
        else if(prodId === "wome"){
            for(var i = 0; i < database.women.length; i++){                
                var pro = database.women[i].prod_id;
                if(JSON.stringify(match.params.prod_id) === JSON.stringify(pro)){
                    item = database.women[i];     
                    break;              
                }               
            }
        }
        else if(prodId === "kids"){
            for(var i = 0; i < database.kids.length; i++){                
                var pro = database.kids[i].prod_id;
                if(JSON.stringify(match.params.prod_id) === JSON.stringify(pro)){
                    item = database.kids[i];     
                    break;              
                }               
            }
        }
        else if(prodId === "spor"){
            for(var i = 0; i < database.sports.length; i++){                
                var pro = database.sports[i].prod_id;
                if(JSON.stringify(match.params.prod_id) === JSON.stringify(pro)){
                    item = database.sports[i];     
                    break;              
                }               
            }
        }
        else if(prodId === "book"){
            for(var i = 0; i < database.books.length; i++){                
                var pro = database.books[i].prod_id;
                if(JSON.stringify(match.params.prod_id) === JSON.stringify(pro)){
                    item = database.books[i];     
                    break;              
                }               
            }
        }        
        return(
            <ItemDetail item={item}/>
        );
    }   
    var width = window.innerWidth;
    const headerMain = () => {
        if(width > 768){
            return(<HeaderBig/>);
        }
        else{
            return(<Header/>);
        }
    }
    return (        
        <div className="bg">              
            {headerMain()}         
            <div>
                <Switch>                
                    <Route path="/home" component={() => {
                        return(
                            <div>  
                                <div className="carouselItem">
                                    <CarouselComponent/>
                                </div>                                                                                             
                                <div>
                                    <div>
                                        <Promos/>
                                    </div>  
                                </div>                                                                                                               
                            </div>                            
                        );
                        }}/> 
                    <Route path='/result/:arr' component={sendResult}/>
                    <Route path='/itemDetail/:prod_id' component={sendItem}/>           
                    <Redirect to="/home"/>                                                               
                </Switch>  
            </div>                        
            <Footer/>                                                                                                                                            
        </div>
    );
}

export default Main;
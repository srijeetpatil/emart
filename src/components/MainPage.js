import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Promos from './MainPagePromos';
import CarouselComponent from './CarouselComponent';
import {Switch, Redirect, Route, withRouter} from 'react-router-dom';
import Result from './ResultComponent';
import ItemDetail from './ItemDetail';

function Main(){  
    const sendResult = ({match}) => {                   
        return(
        <Result arr={match.params.arr}/>
        );        
    }
    const sendItem = ({match}) => {
        return(
            <ItemDetail item={match.params.prod_id}/>
        );
    }
    return (
        <div className="bg">            
            <Header/> 
            <Switch>                
            <Route path="/home" component={() => {
                return(
                    <div>                                                                      
                        <div >
                            <CarouselComponent/>
                        </div> 
                        <div className="container">
                            <div className="overlay">
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
            <Footer/>                                                                                                                                            
        </div>
    );
}

export default Main;
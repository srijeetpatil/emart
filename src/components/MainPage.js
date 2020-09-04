import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Promos from './MainPagePromos';
import CarouselComponent from './CarouselComponent';
import {Switch, Redirect, Route, withRouter} from 'react-router-dom';
import Result from './ResultComponent';


function Main(){  
    const sendResult = ({match}) => {                   
        return(
        <Result arr={match.params.arr}/>
        );        
    }
    return (
        <div className="bg">            
            <Header/> 
            <Switch>                
            <Route path="/home" component={() => {
                return(
                    <div>
                        <div style={{height:"350px"}}>
                            <CarouselComponent/>
                        </div>                 
                        <Promos/> 
                    </div>                            
                );
                }}/> 
            <Route path='/result/:arr' component={sendResult}/>
            <Redirect to="/home"/>                                                   
            </Switch>                                                                                                            
            <Footer/>           
        </div>
    );
}

export default Main;
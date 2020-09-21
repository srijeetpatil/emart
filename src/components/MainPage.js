import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Promos from './MainPagePromos';
import CarouselComponent from './CarouselComponent';
import {Switch, Redirect, Route} from 'react-router-dom';
import Result from './ResultComponent';
import ItemDetail from './ItemDetail';
import database from '../data/database';
import HeaderBig from './HeaderSample';
import Filter from './FilterResults';
import ScrollToTop from './ScrollToTop';
import LoginComponent from './LoginComponent';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login : () => {
                return(
                    null
                );
            },
            disabled: false            
        }
        this.loginClicked = this.loginClicked.bind(this); 
        this.loginCancelled = this.loginCancelled.bind(this);       
    }  
    sendResult({match}){  
        var num = parseInt(match.params.str.slice(0,1));
        var category = match.params.str.slice(1,);
        var items = [];
        if(num === 1 || num === 2 || num === 3){
            items = Filter(category, num);
        }                     
        else{
            items = Filter(category, null);
        }        
        return(
              <div style={{backgroundColor: "white"}}>
                  <Result items={items}/>
              </div>     
        );        
    }
    sendItem({match}){
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
            <div style={{backgroundColor:"white"}}>
                <ItemDetail item={item}/>
            </div>            
        );
    }       
    headerMain(){
        var width = window.innerWidth;
        if(width > 768){
            return(<HeaderBig loginClicked={this.loginClicked}/>);
        }
        else{
            return(<Header loginClicked={this.loginClicked}/>);
        }
    }
    loginClicked(){ 
        this.setState({
            disabled: true
        });                           
        return(
            this.setState({
                login : () => {
                    return(
                        <div id="loginBox">
                            <LoginComponent loginCancelled={this.loginCancelled}/>
                        </div>                        
                    );                    
                }
            })                       
        );
    }
    loginCancelled(){
        this.setState({
            disabled: false
        });
        return(
            this.setState({
                login: () => {
                    return(null);
                }
            })
        );
    }    
    render(){               
        return (        
            <div className="bg"> 
                <div disabled={this.state.disabled}>
                    {this.headerMain()}
                </div>                              
                <div style={{height: "0px"}}>
                    {this.state.login()}                                        
                </div>                                            
                <div disabled={this.state.disabled}>
                    <Switch>   
                        <ScrollToTop>             
                        <Route path="/pbl" component={() => {
                            return(
                                <div>  
                                    <div className="carouselItem">
                                        <CarouselComponent/>
                                    </div>                                                                                             
                                    <div>                                    
                                        <Promos/>                                      
                                    </div>                                                                                                               
                                </div>                            
                            );
                            }}/> 
                        <Route path='/result/:str' component={this.sendResult}/>                                            
                        <Route path='/itemDetail/:prod_id' component={this.sendItem}/>           
                        <Redirect to="/pbl"/> 
                        </ScrollToTop>                                                                                  
                    </Switch>  
                </div>
                <div disabled={this.state.disabled}>
                    <Footer/> 
                </div>                                                                                                                                                                                   
            </div>
        );
    }
}

export default Main;
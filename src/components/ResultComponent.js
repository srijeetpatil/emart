import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import descriptionFormatter from './DescriptionFormatter';
import Search from './SearchBarComponent';

class Result extends Component{
    constructor(props){
        super(props);        
    }       
    render(){                 
        var category = this.props.category;
        var items = [];   
        
        if(this.props.results != null){
           if(category === undefined){                
                items = this.props.results;
           }
           else{
                for(var i = 0; i < this.props.results.length; i++){
                    if(this.props.results[i].category === category){
                        items = items.concat([this.props.results[i]]);
                    }
                }
           }
    
            const array = items.map((item) => { 
                var source = item.image;             
                let len = descriptionFormatter(item.description); 
                const seemore = () => {
                    if(len < item.description.length){
                        return(
                            <Link to={`/itemDetail/${item.prod_id}`}> see more</Link>
                        );
                    }
                }        
                var desc = item.description.slice(0, len);                        
                return(
                    <div style={{maxHeight:"250px", overflow:"hidden"}}>           
                        <NavLink className="nav-link" to={`/itemDetail/${item.prod_id}`}> 
                            <div className="row"> 
                                <div className="col-md-2 resultAdjustment">
                                    <img className="resultImg" src={source} style={{objectFit:"contain"}}></img>
                                </div>                                                                                   
                                <div className="col-md-4 resultText" style={{paddingLeft:"10px"}}>
                                    <h5 style={{color:"black"}}>{item.name}</h5>                            
                                    <h5 style={{color:"#bb0b0b"}}>{item.price}</h5>  
                                    <p style={{fontSize:"14px", color:"black"}}>{desc}<span>{seemore()}</span></p>                             
                                </div>
                                <div className="container" style={{marginBottom:"0px"}}>
                                    <hr></hr>
                                </div>  
                            </div>                                                                                                                            
                        </NavLink>                                                                                          
                    </div>                
                );
            })
            return(
                <div>            
                    <Search color={"#f0edf3"}/>                                
                    <div style={{paddingTop:"40px"}}>
                        <hr></hr>                               
                        {array}                                
                        <hr></hr>
                    </div>                                
                </div>                                                                                                     
            );
        }
        else{
            return(
                <div style={{width:"100%", height:"100vh"}}>
                    <h1 style={{textAlign:"center", margin:"auto", display:"block"}}>Loading</h1>
                </div>
            );
        }
    }
}

export default Result;
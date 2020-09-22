import React from 'react';
import database from '../data/database';
import {NavLink} from 'react-router-dom';
import {Card, CardBody, CardImg} from 'reactstrap';

// Should be changed to a more optimised method
// will be used later
function SimilarProducts(props){
    var category = props.category;
    var items = [];
    for(var i = 0; i < database.electronics.length; i++){
        if(database.electronics[i].category === category && database.electronics[i].prod_id !== props.ignore){
            items = items.concat([database.electronics[i]]);        
        }
    }   
    for(var i = 0; i < database.men.length; i++){
        if(database.men[i].category === category && database.men[i].prod_id !== props.ignore){
            items = items.concat([database.men[i]]);
        }
    }
    for(var i = 0; i < database.women.length; i++){
        if(database.women[i].category === category && database.women[i].prod_id !== props.ignore){
            items = items.concat([database.women[i]]);
        }
    }
    for(var i = 0; i < database.kids.length; i++){
        if(database.kids[i].category === category && database.kids[i].prod_id !== props.ignore){
            items = items.concat([database.kids[i]]);
        }
    }
    for(var i = 0; i < database.sports.length; i++){
        if(database.sports[i].category === category && database.sports[i].prod_id !== props.ignore){
            items = items.concat([database.sports[i]]);
        }
    }
    for(var i = 0; i < database.books.length; i++){
        if(database.books[i].category === category && database.books[i].prod_id !== props.ignore){
            items = items.concat([database.books[i]]);
        }
    }      
    const similar = items.map((i) => {
        let source = require('../' + i.image);
        return(                                                                          
            <div className="cardItem" style={{overflow:"hidden"}}>                    
                <Card style={{borderRadius:"0px"}}>
                    <NavLink style={{textDecoration:"none"}} to={`/itemDetail/${i.prod_id}`}>                                                                             
                        <CardBody style={{height:"250px"}}>                            
                            <CardImg style={{objectFit:"contain", height:"60%"}} src={source}></CardImg>                                
                            <div style={{textAlign: "center", color:"black"}}>
                                <p style={{fontSize:"12px"}}><b>{i.name}</b></p>                                
                            </div> 
                            <div style={{textAlign: "center", color:"#bb0b0b"}}>
                                <h6>{i.price}</h6>                                
                            </div>                                                       
                        </CardBody>
                    </NavLink>                                                                          
                </Card>                    
            </div>                                                                  
        );
    });
    return(                               
        <div className="container" style={{marginLeft:"10%", marginRight:"10%", marginBottom:"10px"}}>            
            {similar}
        </div>                
    );

}

export default SimilarProducts;
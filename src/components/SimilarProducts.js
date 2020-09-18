import React from 'react';
import database from '../data/database';
import {Link} from 'react-router-dom';

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
            <div className="nav-link similar" style={{marginLeft:"15px"}}>
                <Link style={{textDecoration:"none"}} to={`/itemDetail/${i.prod_id}`}>
                    <img src={source} style={{objectFit:"contain", width:"100%", height:"100%"}}></img>
                    <h6 style={{color:"black"}}><b>{i.name}</b></h6>
                    <p style={{color:"#bb0b0b"}}>{i.price}</p>
                </Link>                
            </div>                       
        );
    });
    return(                               
        <div className="row">            
            {similar}
        </div>                
    );

}

export default SimilarProducts;
import React from 'react';
import database from '../data/database';

// Should be changed to a more optimised method
// will be used later
function SimilarProducts(props){
    var category = props.category;
    var items = [];
    for(var i = 0; i < database.electronics.length; i++){
        if(database.electronics[i].category === category){
            items = items.concat([database.electronics[i]]);
            console.log("yes");
        }
    }   
    for(var i = 0; i < database.men.length; i++){
        if(database.men[i].category === category){
            items = items.concat([database.men[i]]);
        }
    }
    for(var i = 0; i < database.women.length; i++){
        if(database.women[i].category === category){
            items = items.concat([database.women[i]]);
        }
    }
    for(var i = 0; i < database.kids.length; i++){
        if(database.kids[i].category === category){
            items = items.concat([database.kids[i]]);
        }
    }
    for(var i = 0; i < database.sports.length; i++){
        if(database.sports[i].category === category){
            items = items.concat([database.sports[i]]);
        }
    }
    for(var i = 0; i < database.books.length; i++){
        if(database.books[i].category === category){
            items = items.concat([database.books[i]]);
        }
    }      
    const similar = items.map((i) => {
        let source = require('../' + i.image);
        return(
            <div>
                <img src={source} style={{height:"150px"}}></img>
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
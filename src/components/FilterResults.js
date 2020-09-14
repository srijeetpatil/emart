import { generatePath } from 'react-router-dom';
import database from '../data/database';

function Filter(category, physicalAttribute){
    var items = [];
    if(physicalAttribute === null){
        for(var i = 0; i < database.electronics.length; i++){
            if(database.electronics[i].category === category){
                items = items.concat([database.electronics[i]]);
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
    }
    else{
        var arr;
        if(physicalAttribute === 1){
            arr = database.men;
        }
        else if(physicalAttribute === 2){
            arr = database.women;
        }
        else{
            arr = database.kids;
        }
        for(var i = 0; i < arr.length; i++){
            if(arr[i].category === category){
                items = items.concat([arr[i]]);
            }
        }
    }    
    return(items);
}

export default Filter;
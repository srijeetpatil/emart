import database from '../data/database';
import {useState, useEffect} from 'react';

const GetCategory = (category) => {
    const [item, setItem] = useState([]);    

    useEffect(() => {
        database.get(category + ".json")        
        .then(cat => {
            setItem(cat.data)            
        })            
    }, []);        
    if(item.length !== 0){                     
        return item;
    }
}

export default GetCategory;
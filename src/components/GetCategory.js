import {baseurl} from '../data/baseurl';
import {useState, useEffect} from 'react';

const GetCategory = (category) => {
    const [item, setItem] = useState([]);    

    useEffect(() => {
        fetch(baseurl + category)
        .then(response => response.json())
        .then(cat => {
            setItem(cat)            
        })            
    }, []);         
    if(item.length !== 0){                     
        return item;
    }
}

export default GetCategory;
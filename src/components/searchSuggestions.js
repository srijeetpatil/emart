import {useState, useEffect} from 'react';
import database from '../data/database';

const SearchSuggestions = () => {
    const [arr, setArr] = useState([])

    useEffect(() => {
        database.get("searchSuggestions.json")        
        .then(obj => {
            setArr(obj.data)            
        })            
    }, []);   
        
    return arr;
}

export default SearchSuggestions;
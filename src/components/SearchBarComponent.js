import React, {useState} from 'react';
import SearchSuggestions from './searchSuggestions';
import {Link} from 'react-router-dom';

function Search(props){  
    var arr = SearchSuggestions();  
    function listofSearches(str){        
        var array = [];
        var max = 10;
        for(var i = 0; i < arr.length; i++){
            var string = arr[i];            
            var length = str.length;     
            if(max === 0){
                break;
            }       
            if(string.length >= length){
                for(var j = 0; j <= string.length - length; j++){
                    var anagram = string.slice(j, j + length);                                           
                    if(anagram.toUpperCase() === str.toUpperCase()){                    
                        array = array.concat([string]);
                        max--;
                        break;
                    }
                }
            }
        }        
        return array;
    }     

    const [searchResults, setSearchResults] = useState(() => {
        return (
            <div></div>
        );
    })        

    const [searchValue, setSearchValue] = useState("");
    const [disabled, setDisabled] = useState(true);
    
    const changeResults = (e) => {
        var sr = () => {
            return(
                <div></div>
            );
        }        
        if(e.target.value){       
            setSearchValue(e.target.value);
            setDisabled(false);
            sr = listofSearches(e.target.value).map((item) => {
                return(
                    <div id={item} style={{width: "100%"}} onMouseOver={() => document.getElementById(item).style.backgroundColor = "#c6c6c6"}
                    onMouseOut={() => document.getElementById(item).style.backgroundColor = "#ffffff"} onClick={() => {
                        document.getElementById("searchInputBox").value = item;
                        setSearchResults(() => {
                            return(
                                <div></div>
                            );
                        });
                    }}>
                        <Link to={`/result/${"6" + item}`} style={{textDecoration:"none", color: "#000000"}}>
                            <div style={{marginLeft:"15px", marginRight:"15px"}}>
                                {item} 
                            </div>
                        </Link>               
                    </div>
                );
            });           
        }        
        else{
            setDisabled(true);
        }
        setSearchResults(sr);
    }

    return(
        <div style={{width:"100%", backgroundColor: props.color}}>
            <div className="container">
                <div className="row" style={{justifyContent:"center", alignItems:"center", maxHeight:"50px"}}>
                    <h1 className="basic-font col-md-3" style={{textAlign:"center"}}>E MART</h1>
                    <div className="search col-md-4 col-9" style={{height:"fit-content", overflow:"visible", backgroundColor:"#ffffff"}}> 
                        <div className="row">                            
                            <input id="searchInputBox" className="basic-font" type="text" placeholder="Search" style={{outline:"0", border:"0px", borderBottom:"2px", borderRadius:"7px 0px 0px 0px", marginLeft:"15px"}}
                            onChange={changeResults}></input>
                            <div disabled={disabled} style={{marginLeft:"auto", marginRight:"5px", marginTop:"auto", marginBottom:"auto"}}>
                                <Link to={`/result/${"6" + searchValue}`}>
                                    <i className="fa fa-search"></i>
                                </Link> 
                            </div>                          
                        </div>
                        <div className="basic-font" style={{left:0, borderRadius:"0px 0px 7px 7px", position:"absolute", width:"100%", backgroundColor:"#ffffff", borderStyle:"solid",
                            borderWidth:"1px", borderColor:"#c6c6c6", outline:"none", marginBottom:"10px"}}>
                            {searchResults}
                        </div> 
                    </div>                                                             
                </div>
            </div>            
        </div>        
    );
}

export default Search;
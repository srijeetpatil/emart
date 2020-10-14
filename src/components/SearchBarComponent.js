import React, {useState} from 'react';
import SearchSuggestions from './searchSuggestions';

function Search(props){  
    var arr = SearchSuggestions();  
    function listofSearches(string){        
                
        return arr;
    }     

    const [searchResults, setSearchResults] = useState(() => {
        return (
            <div></div>
        );
    })        
    
    const changeResults = (e) => {
        var sr = () => {
            return(
                <div></div>
            );
        }        
        if(e.target.value){            
            sr = listofSearches(e.target.value).map((item) => {
                return(
                    <div id={item} style={{width: "100%"}} onMouseOver={() => document.getElementById(item).style.backgroundColor = "#c6c6c6"}
                    onMouseOut={() => document.getElementById(item).style.backgroundColor = "#ffffff"}>
                        <div style={{marginLeft:"15px", marginRight:"15px"}}>
                            {item} 
                        </div>               
                    </div>
                );
            });           
        }        
        setSearchResults(sr);
    }

    return(
        <div style={{width:"100%", backgroundColor: props.color}}>
            <div className="container">
                <div className="row" style={{justifyContent:"center", alignItems:"center", maxHeight:"50px"}}>
                    <h1 className="basic-font col-md-3" style={{textAlign:"center"}}>E MART</h1>
                    <div className="search col-md-4 col-9" style={{height:"fit-content", overflow:"visible", backgroundColor:"#ffffff"}}> 
                        <div>
                            <input className="basic-font" type="text" placeholder="Search" style={{width:"100%", outline:"0", border:"0px", borderBottom:"2px"}}
                            onChange={changeResults}></input>
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
import React from 'react';

function Search(props){
    return(
        <div className="row" style={{justifyContent:"center", alignItems:"center", backgroundColor: props.color}}>
            <h1 className="basic-font col-md-3" style={{textAlign:"center"}}>E MART</h1>
            <div className="col-md-6">                                                        
                <input className="search" type="text" placeholder="Search not developed yet"></input>                                                       
            </div>                        
        </div>
    );
}

export default Search;
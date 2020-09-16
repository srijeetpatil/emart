import React from 'react';

function Search(props){
    return(
        <div style={{width:"100%", backgroundColor: props.color}}>
            <div className="container">
                <div className="row" style={{justifyContent:"center", alignItems:"center"}}>
                    <h1 className="basic-font col-md-3" style={{textAlign:"center"}}>E MART</h1>
                    <div className="col-md-6">                                                        
                        <input className="search" type="text" placeholder="Search not developed yet"></input>                                                       
                    </div>                        
                </div>
            </div>            
        </div>        
    );
}

export default Search;
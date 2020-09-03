import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Promos from './MainPagePromos';

function Main(){    
    return (
        <div className="bg">            
            <Header/>  
            <div>                  
                <div>
                    <img style={{width:"100%", height: "450px"}}src={require('../assets/woman.jpg')}/>
                </div> 
                <div>
                    <Promos/> 
                </div> 
            </div>                                                                                           
            <Footer/>           
        </div>
    );
}

export default Main;
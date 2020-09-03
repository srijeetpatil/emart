import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Card, CardBody, CardImg, CardSubtitle} from 'reactstrap';
import Promos from './MainPagePromos';

function Main(){    
    return (
        <div className="bg">            
            <Header/>   
                <Promos/>          
            <Footer/>           
        </div>
    );
}

export default Main;
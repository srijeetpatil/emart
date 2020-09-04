import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText} from 'reactstrap';
import {electronics} from '../data/electronics';
import {men} from '../data/men';
import {women} from '../data/women';
import {kids} from '../data/kids';
import {sports} from '../data/sports';
import {books} from '../data/books';

class Result extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const num = parseInt(this.props.arr);        
        const items = () => {
            switch(num){
                case 1:
                    return electronics;               
                case 2:
                    return men;
                case 3:
                    return women;
                case 4:
                    return kids;
                case 5:
                    return sports;
                case 6:
                    return books;
            }    
        }  
        var itemarr = items();             
        const array = itemarr.map((item) => { 
            var source = require('../' + item.image);            
            return(
                <div style={{marginBottom:"15px"}}> 
                    <Card style={{borderRadius:"0px"}}>
                        <div className="row">
                            <div className="col-md-3">
                                <CardImg src={source} style={{maxHeight:"200px", objectFit:"contain", margin:"10px 10px 10px 10px"}}></CardImg>
                            </div>                        
                            <div className="col-md-6">
                                <CardBody>
                                    <CardText>{item.description}</CardText>
                                    <CardText>{item.price}</CardText>
                                </CardBody>
                            </div>                        
                        </div>                
                    </Card>
                </div>                
            );
        })
        return(
            <div style={{marginLeft:"20px", marginRight:"20px"}}>
                {array}
            </div>
        );
    }
}

export default Result;
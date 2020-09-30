import React from 'react';
import {baseurl} from '../data/baseurl';
import {NavLink} from 'react-router-dom';
import {Card, CardBody, CardImg} from 'reactstrap';

function SimilarProducts(props){
    var category = props.category;
    var items = [];    
    for(var i = 0; i < props.mainCategory.length; i++){
        if(props.mainCategory[i].category === category && props.mainCategory[i].prod_id !== props.ignore){
            items = items.concat([props.mainCategory[i]]);        
        }
    }            
    const similar = items.map((i) => {
        let source = baseurl + i.image;
        return(                                                                          
            <div className="cardItem" style={{overflow:"hidden"}}>                    
                <Card style={{borderRadius:"0px"}}>
                    <NavLink style={{textDecoration:"none"}} to={`/itemDetail/${i.prod_id}`}>                                                                             
                        <CardBody style={{height:"250px"}}>                            
                            <CardImg style={{objectFit:"contain", height:"60%"}} src={source}></CardImg>                                
                            <div style={{textAlign: "center", color:"black"}}>
                                <p style={{fontSize:"12px"}}><b>{i.name}</b></p>                                
                            </div> 
                            <div style={{textAlign: "center", color:"#bb0b0b"}}>
                                <h6>{i.price}</h6>                                
                            </div>                                                       
                        </CardBody>
                    </NavLink>                                                                          
                </Card>                    
            </div>                                                                  
        );
    });
    return(                               
        <div className="container" style={{marginLeft:"10%", marginRight:"10%", marginBottom:"10px"}}>            
            {similar}
        </div>                
    );

}

export default SimilarProducts;
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Card, CardBody, CardImg} from 'reactstrap';

function SimilarProducts(props){
    var category = props.category;
    var items = [];    
    var max = 4;
    for(var i = 0; i < props.mainCategory.length; i++){
        if(props.mainCategory[i].category === category && props.mainCategory[i].prod_id !== props.ignore){
            if(max === 0){
                break;
            }
            items = items.concat([props.mainCategory[i]]);        
            max--;
        }
    }            
    const similar = items.map((i) => {
        let source = i.image;
        return(                                                                          
            <div className="cardItem" style={{overflow:"hidden"}}>                    
                <Card style={{borderRadius:"0px"}}>
                    <NavLink style={{textDecoration:"none"}} to={`/itemDetail/${i.prod_id}`} onClick={() => {
                        props.closeAlltooltips();                     
                    }}>                                                                             
                        <CardBody style={{height:"250px", backgroundImage: "linear-gradient(transparent 60%, white 80%)"}}>                            
                            <CardImg style={{objectFit:"contain", height:"60%"}} src={source}></CardImg>                                
                            <div style={{textAlign: "center", color:"black", height:"20%", overflow:"hidden"}}>
                                <p style={{fontSize:"12px"}}><b>{i.name}</b></p>                                
                            </div> 
                            <div style={{textAlign: "center", color:"#bb0b0b", height:"20%"}}>
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
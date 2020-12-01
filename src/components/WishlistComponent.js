import React, { useEffect, useState } from 'react';
import {UserDatabase} from '../data/userData';
import {Button, Card} from 'reactstrap';
import descriptionFormatter from './DescriptionFormatter';
import {Link, NavLink} from 'react-router-dom';

function WishlistComponent(){

    const [wishlist, setWishlist] = useState(null);
    var logged = JSON.parse(localStorage.getItem("logged"));    

    useEffect(() => {        
        UserDatabase("Users/" + logged + "/wishlist").on("value", function(snapshot) {            
            setWishlist(snapshot.val());
        });
    }, [])            

    var wishlistList = () => {
        if(wishlist != null){
            return(
                <Card className="shadow" style={{marginBottom:"40px"}}>                                               
                    <div className="container">
                    <h2 className="basic-font">My wishlist <i className="fa fa-heart"></i></h2>
                    {Object.values(wishlist).map((item) => {
                        var source = item.image;             
                        let len = descriptionFormatter(item.description); 
                        const seemore = () => {
                            if(len < item.description.length){
                                return(
                                    <Link to={`/itemDetail/${item.prod_id}`}> see more</Link>
                                );
                            }
                        }        
                        var desc = item.description.slice(0, len);                        
                        return(
                            <div>
                                <div style={{maxHeight:"250px", overflow:"hidden", width:"100%"}}>
                                    <div className="row" style={{padding:"10px 10px 10px 10px"}}>      
                                        <div className="col-md-2 resultAdjustment">
                                            <Link to={`/itemDetail/${item.prod_id}`}><img className="resultImg" src={item.image} style={{objectFit:"contain"}}></img></Link>  
                                        </div>  
                                        <div className="col-md-4 resultText" style={{paddingLeft:"10px"}}>
                                            <p>{item.name} <Link onClick={() => {                                                                                                
                                                item.quantity = 1;
                                                UserDatabase("Users/" + logged + "/cart/" + item.prod_id + "/").set(item);
                                                alert("Product added to cart")                                                
                                            }}><i className="fa fa-shopping-cart fa-lg"></i></Link></p>
                                            <p style={{color:"#bb0b0b"}}>{item.price}</p> 
                                            <p style={{fontSize:"13px"}}>{item.description}{seemore()}</p>                                                                                                                                                                         
                                        </div>    
                                        <div><Link onClick={() => {                                
                                            UserDatabase("Users/" + logged + "/wishlist/" + item.prod_id).remove();                                            
                                        }}><i className="fa fa-trash ml-2"></i></Link></div>                                     
                                    </div>                                               
                                </div>
                                <hr></hr>
                            </div>                
                        );
                    })}
                    <Button color="danger" style={{marginLeft:"40%", marginBottom:"10px"}} onClick={() => {
                        UserDatabase("Users/" + logged + "/wishlist").remove();
                    }}>Clear Wishlist</Button>
                    </div>           
                </Card>
            );
        }
        else{
            return(
                <div style={{height:"100vh"}} className="basic-font text-danger">
                    <h1 style={{textAlign:"center"}}>Your wishlist is empty !</h1>
                    <div style={{textAlign:"center"}}><Link to="/emart">Continue shopping</Link></div>
                    <img src="https://i.makeagif.com/media/1-05-2017/LEq2YZ.gif" style={{margin:"auto", display:"block", overflow:"hidden"}}></img>
                </div>
            );
        }
    }

    return(
        <div className="container">                                                                         
            {wishlistList()}                                                                          
        </div>
    );
}

export default WishlistComponent;
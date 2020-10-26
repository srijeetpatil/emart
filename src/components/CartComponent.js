import React, { useEffect, useState } from 'react';
import {UserDatabase} from '../data/userData';
import {Card, CardBody, Input, Badge, Button, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';

function CartComponent() {
    
    var dateToday = new Date();    
    dateToday.setDate(dateToday.getDate() + 5);
    var dd = dateToday.getDate(); 
    var mm = dateToday.getMonth() + 1;  
    var yy = dateToday.getFullYear();
    var date = dd + "/" + mm + "/" + yy;
    
    const [cart, setCart] = useState([]);
    const [isEmpty, setEmpty] = useState(0); 
    const [modal, setModal] = useState(false); 
    const [address, setAddress] = useState("");
    var total = 0;   
    var cartStrings = [];    
    
    useEffect(() => {
        var logged = JSON.parse(localStorage.getItem("logged"));
        UserDatabase("Users/" + logged + "/cart/").on("value", function(snapshot){
            if(snapshot.val() === null){
                setEmpty(1);
            }
            setCart(snapshot.val());
        })
        UserDatabase("Users/" + logged + "/address").on("value", function(snapshot){
            setAddress(snapshot.val());
        })
    }, [])

    const toggle = () => {
        setModal(!modal);
    }

    const listItems = () => cartStrings.map((li) => {
        return(
            <li>{li}</li>                                                          
        );
    });
                
    const cartItems = () => {        
        if(isEmpty === 1){
            var source = require("../assets/cartEmpty.png");
            return(
                <div style={{height:"100vh"}} className="basic-font text-danger">
                    <h1 style={{textAlign:"center"}}>Wow, such empty !</h1>
                    <div style={{textAlign:"center"}}><Link to="/emart">Continue shopping</Link></div>
                    <img src="https://i.imgur.com/sE7foGE.gif" style={{margin:"auto", display:"block", overflow:"hidden"}}></img>
                </div>
            );
        }
        else{
            var logged = JSON.parse(localStorage.getItem("logged"));
            var items = Object.values(cart);                                                          
            const cartItems = items.map((item) => {   
                cartStrings = cartStrings.concat([item.name + " x " + item.quantity]);                
                var withoutCurrecy = item.price.slice(1, );
                var arr = withoutCurrecy.split(',');
                var price = "";
                for(var i = 0; i < arr.length; i++){
                    price += arr[i];
                }            
                total += parseInt(price) * item.quantity;
                return(
                    <div>
                        <div style={{maxHeight:"250px", overflow:"hidden", width:"100%"}}>
                            <div className="row" style={{padding:"10px 10px 10px 10px"}}>      
                                <div className="col-md-2 resultAdjustment">
                                    <Link to={`/itemDetail/${item.prod_id}`}><img className="resultImg" src={item.image} style={{objectFit:"contain"}}></img></Link>  
                                </div>  
                                <div className="col-md-4 resultText" style={{paddingLeft:"10px"}}>
                                    <p>{item.name}</p>
                                    <p style={{color:"#bb0b0b"}}>{item.price}</p>                                                                    
                                    <div style={{width:"35%"}}>
                                        <Input id={item.prod_id} placeholder="Quantity" min={1} max={100} type="number" step="1" onChange={() => {
                                            if(document.getElementById(item.prod_id).value < 1){
                                                document.getElementById(item.prod_id).value = 1;
                                            }
                                            else{
                                                UserDatabase("Users/" + logged + "/cart/" + item.prod_id + "/quantity").set(document.getElementById(item.prod_id).value);
                                            }                                            
                                        }} defaultValue={1}/>
                                    </div> 
                                    <p style={{fontSize:"13px"}}>{item.description}</p>                                                                   
                                </div>    
                                <div><Link onClick={() => {                                
                                    UserDatabase("Users/" + logged + "/cart/" + item.prod_id).remove();
                                }}><i className="fa fa-trash ml-2"></i></Link></div>                                                                                                                                            
                            </div>                                               
                        </div>
                        <hr></hr>
                    </div>                    
                );
            })
            return(
                <div className="container">                    
                    <Card className="shadow" style={{borderRadius:"0px", marginBottom:"50px", display:"block"}}>
                        <h1 className="basic-font container">My Cart <i className="fa fa-shopping-cart"></i></h1>
                        <CardBody>
                            {cartItems}                            
                            <Badge color="info" style={{marginLeft:"45%"}}><h5><strong>Total</strong>: ₹{total}/-</h5></Badge>                            
                        </CardBody>
                        <Button color="success" style={{marginLeft:"45%", marginBottom:"10px"}} onClick={() => {
                            toggle();                            
                        }}>Proceed</Button>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader className="text-info" style={{backgroundColor:"#000000", color:"floralwhite", borderStyle:"solid", borderColor:"white", borderWidth:"1px"}}>
                                <div >
                                    Are you sure ?
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <p><strong>Your total : </strong> ₹{total}</p>
                                    <p><strong>Your purchase: </strong></p>
                                    <ul>
                                        {listItems()}
                                    </ul>
                                    <p><strong>Payment options: </strong></p>
                                    <input type="radio" disabled checked="checked" style={{float:"left"}}></input>
                                    <p className="ml-2">Cash on Delivery</p>    
                                    <p><strong>Delivery location: </strong></p>
                                    <p>{address}</p>  
                                    <Button color="success" style={{margin:"auto", display:"block"}} onClick={() => {
                                        var logged = JSON.parse(localStorage.getItem("logged"));
                                        var items = Object.values(cart);
                                        var bill = {
                                            total: total,
                                            expectedDate: date
                                        }
                                        items = items.concat([bill]);
                                        UserDatabase("Users/" + logged + "/orders/").push(items);
                                        UserDatabase("Users/" + logged + "/cart").remove();
                                        alert("Your order has been placed successfully");
                                    }}>Confirm</Button>                                                                
                                </div>
                            </ModalBody>                        
                        </Modal>
                    </Card>                                    
                </div>
            );
        }
    }

    return(
        <div>                
            {cartItems()}        
        </div>
    );
}

export default CartComponent;
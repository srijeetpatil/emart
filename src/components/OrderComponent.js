import React, { useEffect, useState } from 'react';
import {UserDatabase} from '../data/userData';
import {Card, CardBody, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function OrderComponent(){

    const [empty, setEmpty] = useState(0);
    const [orders, setOrders] = useState([]);    
    const [phone, setPhone] = useState("");

    useEffect(() => {
        var logged = JSON.parse(localStorage.getItem("logged"));
        UserDatabase("Users/" + logged + "/orders/").on("value", function(snapshot){
            if(snapshot.val() === null){
                setEmpty(1);
            }
            setOrders(snapshot.val());
        })          
        UserDatabase("Users/" + logged + "/phone/").on("value", function(snapshot){
            setPhone(snapshot.val());
        })
    }, [])

    const ordersItems = () => {
        if(empty === 1){
            return(
                <div style={{height:"100vh"}} className="basic-font text-danger">
                    <h1 style={{textAlign:"center"}}>You have not placed any orders yet !</h1>
                </div>
            );
        }
        else{            
            var items = Object.values(orders);            
            var subOrder = items.map((order) => { 
                var delAddress;               
                var orderIndivisual = order.map((od) => {   
                    if(od.total){
                        var expectedDelivery = od.expectedDate;
                        var total = od.total;
                        delAddress = od.address;
                        return(
                            <div>
                                <p><strong>Be ready with: </strong>₹ {total}</p>
                                <p><strong>Expected delivery date: </strong> {expectedDelivery}</p>
                            </div>
                        );
                    }   
                    else{
                        var quantity  = od.quantity;                        
                        return(
                            <div>
                                <div style={{maxHeight:"250px", overflow:"hidden", width:"100%"}}>
                                    <div className="row" style={{padding:"10px 10px 10px 10px"}}>      
                                        <div className="col-md-2 resultAdjustment">
                                            <Link to={`/itemDetail/${od.prod_id}`}><img className="resultImg" src={od.image} style={{objectFit:"contain"}}></img></Link>  
                                        </div>  
                                        <div className="col-md-4 resultText" style={{paddingLeft:"10px"}}>
                                            <p>{od.name + "(Qty = " + quantity + ")"}</p>
                                            <p style={{color:"#bb0b0b"}}>{od.price}</p>
                                            <p style={{fontSize:"13px"}}>{od.description}</p>                                                                                                                                                                                    
                                        </div>                                                                                                                                                                                       
                                    </div>                                               
                                </div>
                                <hr></hr>
                            </div>
                        );
                    }                                  
                });
                return(
                    <div>                        
                        <div className="container">                            
                            {orderIndivisual}
                            <p><strong>Delivery location: </strong>{delAddress} <a style={{color: "blue", textDecoration: "underline"}}onClick={() => {
                                document.getElementById(items.indexOf(order)).style.display = "initial";
                            }}>Change delivery location ?</a></p>                              
                            <div id={items.indexOf(order)} style={{display: "none"}}>
                                <textarea id={items.indexOf(order) + "textarea"} className="changeAddress"></textarea>                                                            
                                <div className="row" style={{marginLeft: "10px"}}>
                                    <Button color="success" onClick={() => {
                                        if(document.getElementById(items.indexOf(order) + "textarea").value.length != 0){
                                            var index = items.indexOf(order);
                                            var logged = JSON.parse(localStorage.getItem("logged"));
                                            var array = [];
                                            var keys = [];
                                            UserDatabase("Users/" + logged + "/orders/").on("value", (snapshot) => {
                                                array = Object.values(snapshot.val());
                                                keys = Object.keys(snapshot.val());
                                            })
                                            var changes = array[index];
                                            changes[1].address = document.getElementById(items.indexOf(order) + "textarea").value;
                                            var key = keys[index];
                                            UserDatabase("Users/" + logged + "/orders/" + key + "/").set(changes);
                                        }
                                        document.getElementById(items.indexOf(order)).style.display = "none";                                       
                                    }}>Confirm</Button>
                                    <Button color="danger" onClick={() => {
                                        document.getElementById(items.indexOf(order)).style.display = "none";
                                    }}>Cancel</Button>
                                </div>
                            </div>                         
                            <p><strong>Phone: </strong>{phone}</p>
                        </div>
                    </div>
                );
            })
            return(
                <div className="container">                    
                    <Card className="shadow" style={{marginBottom:"40px"}}>                                               
                        <div className="container">
                            <h2 className="basic-font">My Orders <i className="fa fa-tasks"></i></h2> 
                            {subOrder}
                        </div>                        
                    </Card>
                </div>
            );
        }
    }

    return(
        <div>
            {ordersItems()}
        </div>
    );
}

export default OrderComponent;
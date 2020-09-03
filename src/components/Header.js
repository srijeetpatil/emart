import React from 'react';
import {Jumbotron, Navbar, Nav, InputGroup, Input, NavItem, NavLink,Button} from 'reactstrap';

function Header(){    
    return(
        <React.Fragment>
                <Navbar className="nav" expand="md">
                    <div className="container">                                                                       
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link basic-font"  ><span className="fa fa-plug fa-lg"></span> Electronics</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link basic-font" ><span className="fa fa-male fa-lg"></span> Men</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link basic-font"  ><span className="fa fa-female fa-lg"></span> Women</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link basic-font" ><span className="fa fa-child fa-lg"></span> Kids</NavLink>
                            </NavItem>    
                            <NavItem>
                                <NavLink className="nav-link basic-font" ><span className="fa fa-futbol-o fa-lg"></span> Sports</NavLink>
                            </NavItem>   
                            <NavItem>
                                <NavLink className="nav-link basic-font" ><span className="fa fa-book fa-lg"></span> Books</NavLink>
                            </NavItem>                                                  
                        </Nav> 
                        <Nav className="ml-auto" navbar>
                            <Button outline className="basic-font">
                                <span className="fa fa-sign-in fa-lg"></span> Login
                            </Button>                            
                        </Nav>                                                                          
                    </div>
                </Navbar>  
                <Jumbotron>
                    <div className="row">
                        <h1 className="basic-font col-sm-4">E MART</h1>
                        <div className="col-sm-4">                            
                            <input className="search mt-3" type="text" placeholder="Search"></input>
                            <Button className="mb-1">
                                <span className="fa fa-search"></span>
                            </Button>                            
                        </div>                        
                    </div>                   
                </Jumbotron>
        </React.Fragment>                                                
    );
}

export default Header;
import React from 'react';
import {Navbar, Nav, InputGroup, Input, NavItem, NavLink, Button,NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';


function Header(){       
    return(
        <React.Fragment>
                <Navbar className="nav" expand="md">
                    <NavbarBrand className="mr-auto">
                        <Link to='/home'>
                            <img className="basic-font" src={require('../assets/logo512.png')} height="30" width="41" alt='EMART logo' />
                        </Link>                        
                    </NavbarBrand>
                    <div className="container">                                                                       
                        <Nav navbar>
                            <NavItem>                                 
                                <NavLink className="nav-link basic-font" >
                                    <Link to={`/result/${1}`}>
                                        <span className="fa fa-plug"></span> Electronics
                                    </Link>
                                </NavLink>                                                                                                                                                              
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link basic-font" >
                                    <Link to={`/result/${2}`}>
                                        <span className="fa fa-male"></span> Men
                                    </Link>
                                </NavLink>                                    
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link basic-font"  >
                                    <Link to={`/result/${3}`}>
                                        <span className="fa fa-female"></span> Women
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link basic-font" >
                                    <Link to={`/result/${4}`}>
                                        <span className="fa fa-child"></span> Kids
                                    </Link>
                                </NavLink>
                            </NavItem>    
                            <NavItem>
                                <NavLink className="nav-link basic-font" >
                                    <Link to={`/result/${5}`}>
                                        <span className="fa fa-futbol-o"></span> Sports
                                    </Link>
                                </NavLink>
                            </NavItem>   
                            <NavItem>
                                <NavLink className="nav-link basic-font" >
                                    <Link to={`/result/${6}`}>
                                        <span className="fa fa-book"></span> Books
                                    </Link>
                                </NavLink>
                            </NavItem>                                                  
                        </Nav> 
                        <Nav className="ml-auto" navbar>
                            <Button outline className="basic-font">
                                <span className="fa fa-sign-in fa-lg"></span> Login
                            </Button>                            
                        </Nav>                                                                          
                    </div>
                </Navbar>                  
        </React.Fragment>                                                
    );
}

export default Header;
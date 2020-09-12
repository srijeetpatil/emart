import React, {Component} from 'react';
import {Navbar, Nav, InputGroup, Input, NavItem, NavLink, Button,NavbarBrand, Collapse, NavbarToggler} from 'reactstrap';
import {Link} from 'react-router-dom';


class Header extends Component{    
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }
    render(){
        return(
            <React.Fragment>
                <Navbar className="nav" expand="lg" dark>                        
                    <NavbarBrand className="mr-auto" href>
                        <Link to='/home'>
                            <img className="basic-font" src={require('../assets/logo512.png')} height="30" width="41" alt='EMART logo' />
                        </Link>                        
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <div className="container"> 
                    <Collapse isOpen={this.state.isNavOpen} navbar>                                                                     
                            <Nav navbar>
                                <NavItem>                                 
                                    <NavLink className="nav-link basic-font" >
                                        <Link to={`/result/${1}`} onClick={this.toggleNav}>
                                            <span className="fa fa-plug"></span> Electronics
                                        </Link>
                                    </NavLink>                                                                                                                                                              
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link basic-font" >
                                        <Link to={`/result/${2}`} onClick={this.toggleNav}>
                                            <span className="fa fa-male"></span> Men
                                        </Link>
                                    </NavLink>                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link basic-font"  >
                                        <Link to={`/result/${3}`} onClick={this.toggleNav}>
                                            <span className="fa fa-female"></span> Women
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link basic-font" >
                                        <Link to={`/result/${4}`} onClick={this.toggleNav}>
                                            <span className="fa fa-child"></span> Kids
                                        </Link>
                                    </NavLink>
                                </NavItem>    
                                <NavItem>
                                    <NavLink className="nav-link basic-font" >
                                        <Link to={`/result/${5}`} onClick={this.toggleNav}>
                                            <span className="fa fa-futbol-o"></span> Sports
                                        </Link>
                                    </NavLink>
                                </NavItem>   
                                <NavItem>
                                    <NavLink className="nav-link basic-font" >
                                        <Link to={`/result/${6}`} onClick={this.toggleNav}>
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
                        </Collapse>                                                                                                     
                    </div>                        
                </Navbar>                  
            </React.Fragment>                                                
        );
    }       
}

export default Header;
import React, {Component} from 'react';
import {Navbar, Nav, InputGroup, Input, NavItem, NavLink, Button,NavbarBrand, Collapse, NavbarToggler} from 'reactstrap';
import {Link} from 'react-router-dom';
import DropDown from './DropDownComponent';


class Header extends Component{    
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
            is0open: false,
            is1open: false,
            is2open: false,
            is3open: false,
            is4open: false,
            is5open: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleSub = this.toggleSub.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }
    toggleSub(num){
        if(num === 0)
        this.setState({
            is0open: !this.state.is0open
        });
        else if(num === 1)
        this.setState({
            is1open: !this.state.is1open
        });
        else if(num === 2)
        this.setState({
            is2open: !this.state.is2open
        });
        else if(num === 3)
        this.setState({
            is3open: !this.state.is3open
        });
        else if(num === 4)
        this.setState({
            is4open: !this.state.is4open
        });
        else if(num === 5)
        this.setState({
            is5open: !this.state.is5open
        });

    }
    render(){
        return(
            <React.Fragment>
                <Navbar className="nav" expand="lg" dark>                        
                    <NavbarBrand className="mr-auto" href>
                        <Link to='/pbl' onClick={() => {
                            if(this.state.isNavOpen){
                                return(
                                    this.setState({
                                        isNavOpen : false
                                    })
                                );
                            }
                        }}>
                            <img className="basic-font" src={require('../assets/logo512.png')} height="30" width="41" alt='EMART logo' />
                        </Link>                        
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <div className="container"> 
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavLink outline className="basic-font nav-link">
                                    <Link>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Link>                                    
                                </NavLink>                            
                            </Nav>                                                                     
                            <Nav navbar>
                                <NavItem>                                 
                                    <NavLink className="nav-link basic-font" >
                                        <Link onClick={() => {
                                            return(this.toggleSub(0));
                                        }}>
                                            <span className="fa fa-plug"></span> Electronics
                                        </Link>
                                    </NavLink>
                                    <Collapse isOpen={this.state.is0open}>
                                        <DropDown number={0} collapse={this.toggleNav}/>
                                    </Collapse>                                                                                                                                                                                                 
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link basic-font" >
                                        <Link onClick={() => {
                                            return(this.toggleSub(1));
                                        }}>
                                            <span className="fa fa-male"></span> Men
                                        </Link>
                                    </NavLink> 
                                    <Collapse isOpen={this.state.is1open}>
                                        <DropDown number={1} collapse={this.toggleNav}/>
                                    </Collapse>                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link basic-font"  >
                                        <Link onClick={() => {
                                            return(this.toggleSub(2));
                                        }}>
                                            <span className="fa fa-female"></span> Women
                                        </Link>
                                    </NavLink>
                                    <Collapse isOpen={this.state.is2open}>
                                        <DropDown number={2} collapse={this.toggleNav}/>
                                    </Collapse> 
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link basic-font" >
                                        <Link onClick={() => {
                                            return(this.toggleSub(3));
                                        }}>
                                            <span className="fa fa-child"></span> Kids
                                        </Link>
                                    </NavLink>
                                    <Collapse isOpen={this.state.is3open}>
                                        <DropDown number={3} collapse={this.toggleNav}/>
                                    </Collapse> 
                                </NavItem>    
                                <NavItem>
                                    <NavLink className="nav-link basic-font" >
                                        <Link onClick={() => {
                                            return(this.toggleSub(4));
                                        }}>
                                            <span className="fa fa-futbol-o"></span> Sports
                                        </Link>
                                    </NavLink>
                                    <Collapse isOpen={this.state.is4open}>
                                        <DropDown number={4} collapse={this.toggleNav}/>
                                    </Collapse> 
                                </NavItem>   
                                <NavItem>
                                    <NavLink className="nav-link basic-font" >
                                        <Link onClick={() => {
                                            return(this.toggleSub(5));
                                        }}>
                                            <span className="fa fa-book"></span> Books
                                        </Link>
                                    </NavLink>
                                    <Collapse isOpen={this.state.is5open}>
                                        <DropDown number={5} collapse={this.toggleNav}/>
                                    </Collapse> 
                                </NavItem>                                                  
                            </Nav>                              
                        </Collapse>                                                                                                     
                    </div>                        
                </Navbar>                  
            </React.Fragment>                                                
        );
    }       
}

export default Header;
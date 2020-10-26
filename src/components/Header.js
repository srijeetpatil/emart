import React, {Component} from 'react';
import {Navbar, Nav, Modal, ModalBody, ModalHeader, NavItem, NavLink ,NavbarBrand, Collapse, NavbarToggler} from 'reactstrap';
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
            userInfoStatus: false,
            wishlistModal: false
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

    toggleWishlistModal = () => {
        this.setState({
            wishlistModal: !this.state.wishlistModal
        })
    }

    loginOption = () => {
        if(this.props.firstname.length === 0){
            return(
                <Link onClick={() => {
                    this.toggleNav()
                        return(
                            this.props.loginClicked()
                        );
                    }}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                </Link>
            );
        }
        else{
            var name = this.props.firstname + " " + this.props.lastname;
            return(                
                <div>
                    <Link className="row" style={{margin:"10px 10px 10px 10px", textDecoration:"none"}} onClick={() => {
                        this.setState({
                            userInfoStatus: !this.state.userInfoStatus
                        })
                    }}>
                        <div style={{height:"45px", width: "45px", borderRadius:"50%"}}>
                            <img src='data:image/jpeg;base64,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'
                            style={{width:"100%", height:"100%", borderRadius:"50%", objectFit:"fit"}}></img>                                                                     
                        </div>
                        <div style={{margin:"10px 10px 10px 10px"}}>{name}</div>
                    </Link>
                    <Collapse isOpen={this.state.userInfoStatus}>
                        <NavLink><Link style={{textDecoration:"none"}} onClick={() => {
                            var empty = "";
                            localStorage.setItem("logged", JSON.stringify(empty));
                            window.location.reload(false);
                        }}>Log out</Link></NavLink>
                        <NavLink><Link style={{textDecoration:"none"}} to="/cart" onClick={() => {
                            this.toggleNav();
                        }}>My Cart</Link></NavLink>
                        <NavLink><Link style={{textDecoration:"none"}} onClick={() => {                            
                            this.toggleNav();
                        }} to="/wishlist">My Wishlist</Link></NavLink>
                        <NavLink><Link style={{textDecoration:"none"}} to="/orders" onClick={() => {
                            this.toggleNav();
                        }}>My Orders</Link></NavLink>
                    </Collapse> 
                </div>
            );
        }
    }


    render(){
        return(
            <React.Fragment>                 
                <Navbar className="nav" expand="lg" dark>                        
                    <NavbarBrand className="mr-auto" href>
                        <Link to='/emart' onClick={() => {
                            if(this.state.isNavOpen){
                                return(
                                    this.setState({
                                        isNavOpen : false
                                    })
                                );
                            }
                        }} style={{textDecoration:"none"}}>
                            <h5 className="basic-font">EM</h5>
                        </Link>                        
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <div className="container"> 
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavLink outline className="basic-font nav-link">
                                    {this.loginOption()}                              
                                </NavLink>                            
                            </Nav>                                                                     
                            <Nav navbar>
                                <NavItem>                                 
                                    <NavLink className="nav-link basic-font" >
                                        <Link onClick={() => {
                                            return(this.toggleSub(0));
                                        }} style={{textDecoration:"none"}}>
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
                                        }} style={{textDecoration:"none"}}>
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
                                        }} style={{textDecoration:"none"}}>
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
                                        }} style={{textDecoration:"none"}}>
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
                                        }} style={{textDecoration:"none"}}>
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
                                        }} style={{textDecoration:"none"}}>
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
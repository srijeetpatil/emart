import React from 'react';
import {Navbar, Nav, InputGroup, Input, NavItem, NavLink, Button,NavbarBrand, Collapse, NavbarToggler} from 'reactstrap';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';
import DropDown from './DropDownComponent';
import dropdowndata from '../data/dropdowndata';

class HeaderBig extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            electronics : () =>{
                return(
                    null
                );
            },
            men : () => {
                return(
                    null
                );
            },
            women : () => {
                return(
                    null
                );
            },
            kids : () => {
                return(
                    null
                );
            },
            sports : () => {
                return(
                    null
                );
            },
            books : () => {
                return(
                    null
                );
            }
        }
    }
    render(){
        const called = (obj) => {                       
            return(
                <DropDown object={obj}/>
            );        
        }
        return(
        <nav style={{height:"fit-content", backgroundColor:"black"}}> 
            <div className="row" style={{width:"100%"}}>
                <div style={{margin:"auto"}}>
                    <Link to='/home'>
                        <img className="basic-font" src={require('../assets/logo512.png')} height="30" width="41" alt='EMART logo' />
                    </Link>                        
                </div>
                <div className="container" style={{paddingTop:"10px", paddingBottom:"10px"}}>             
                    <div className="row">                                    
                        <div style={{marginLeft:"10px"}}>
                            <div onMouseLeave={() => {                                
                                    return(this.setState({
                                        electronics: null
                                    }))                               
                            }}onMouseEnter={() => {                                
                                return( 
                                    this.setState({
                                        electronics: called(dropdowndata.electronics)
                                    }) 
                                );
                                }}>  
                                <NavLink>
                                    <Link>
                                        <h6 className="basic-font"><span className="fa fa-plug"></span> Electronics</h6>
                                    </Link>
                                </NavLink>                                                                                                                      
                                <div style={{marginTop:"0px",backgroundColor:"floralwhite", width:"max-content", zIndex:"6", position:"absolute"}}>
                                    {this.state.electronics}
                                </div>                                               
                            </div>                                                                                                                                           
                        </div>                     
                        <div style={{marginLeft:"10px"}}>
                            <div onMouseLeave={() => {                                
                                        return(this.setState({
                                            men: null
                                        }))                               
                                }}onMouseEnter={() => {                                
                                    return( 
                                        this.setState({
                                            men: called(dropdowndata.men)
                                        }) 
                                    );
                                    }}> 
                                <NavLink>
                                    <Link>
                                        <h6 className="basic-font"><span className="fa fa-male"></span> Men</h6>
                                    </Link>
                                </NavLink>                                                                                                                       
                                <div style={{marginTop:"0px",backgroundColor:"floralwhite", width:"max-content", zIndex:"5", position:"absolute"}}> 
                                    {this.state.men}        
                                </div>                 
                            </div>                                                                                                                   
                        </div>                     
                        <div style={{marginLeft:"10px"}}>
                            <div onMouseLeave={() => {                                
                                        return(this.setState({
                                            women: null
                                        }))                               
                                }}onMouseEnter={() => {                                
                                    return( 
                                        this.setState({
                                            women: called(dropdowndata.women)
                                        }) 
                                    );
                                    }}>
                                <NavLink>
                                    <Link>
                                        <h6 className="basic-font"><span className="fa fa-female"></span> Women</h6>
                                    </Link>
                                </NavLink>                                                                                                                                    
                                <div style={{marginTop:"0px",backgroundColor:"floralwhite", width:"max-content", zIndex:"4", position:"absolute"}}> 
                                    {this.state.women}        
                                </div>                  
                            </div>
                        </div>                                                                                                                                    
                        <div style={{marginLeft:"10px"}}>
                            <div onMouseLeave={() => {                                
                                        return(this.setState({
                                            kids: null
                                        }))                               
                                }}onMouseEnter={() => {                                
                                    return( 
                                        this.setState({
                                            kids: called(dropdowndata.kids)
                                        }) 
                                    );
                                    }}> 
                                <NavLink>
                                    <Link>
                                        <h6 className="basic-font"><span className="fa fa-child"></span> Kids</h6>
                                    </Link>
                                </NavLink>                                                                                                                                    
                                <div style={{marginTop:"0px",backgroundColor:"floralwhite", width:"max-content", zIndex:"3", position:"absolute"}}> 
                                    {this.state.kids}        
                                </div>                  
                            </div>
                        </div>                                                                                                                                    
                        <div style={{marginLeft:"10px"}}>
                            <div onMouseLeave={() => {                                
                                        return(this.setState({
                                            sports: null
                                        }))                               
                                }}onMouseEnter={() => {                                
                                    return( 
                                        this.setState({
                                            sports: called(dropdowndata.sports)
                                        }) 
                                    );
                                    }}> 
                                <NavLink>
                                    <Link>
                                        <h6 className="basic-font"><span className="fa fa-futbol-o"></span> Sports</h6>
                                    </Link>
                                </NavLink>                                                                                                                                  
                                <div style={{marginTop:"0px",backgroundColor:"floralwhite", width:"max-content", zIndex:"2", position:"absolute"}}> 
                                    {this.state.sports}        
                                </div>                   
                            </div>
                        </div>                                                                                                                                    
                        <div style={{marginLeft:"10px"}}>
                            <div onMouseLeave={() => {                                
                                        return(this.setState({
                                            books: null
                                        }))                               
                                }}onMouseEnter={() => {                                
                                    return( 
                                        this.setState({
                                            books: called(dropdowndata.books)
                                        }) 
                                    );
                                    }}> 
                                <NavLink>
                                    <Link>
                                        <h6 className="basic-font"><span className="fa fa-book"></span> Books</h6>
                                    </Link>
                                </NavLink>                                                                                                                                   
                                <div style={{marginTop:"0px",backgroundColor:"floralwhite", width:"max-content", zIndex:"1", position:"absolute"}}> 
                                    {this.state.books}       
                                </div>                   
                            </div>
                        </div>
                    </div>                                                                                                                                                                  
                </div>
            </div>                                                                                                                          
        </nav>
        );
    }
}
export default HeaderBig;
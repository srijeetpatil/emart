import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'reactstrap';
import dropdowndata from '../data/dropdowndata';

class DropDown extends Component{
    constructor(props){
        super(props);               
    }
    render(){               
        const list = dropdowndata[this.props.number].map((item) => {  
            var str = this.props.number + item;                                        
            return(
                <div className="basic-font">  
                    <NavLink>
                        <Link to={`/result/${str}`} onClick={this.props.collapse} style={{textDecoration:"none"}}>
                            <p>{item.slice(0)}</p>
                        </Link>
                    </NavLink>                                                                          
                </div>
            );            
        });        
        return(
            <div style={{backgroundColor:"black"}}>                
                {list}                               
            </div>
        );
    }
}

export default DropDown;
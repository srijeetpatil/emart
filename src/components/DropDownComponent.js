import React, {Component} from 'react';
import dropdowndata from '../data/dropdowndata';
import {NavLink} from 'reactstrap';

class DropDown extends Component{
    constructor(props){
        super(props);               
    }
    render(){        
        const list = this.props.object.map((item) => {
            return(
                <div>
                    <NavLink><p style={{fontSize:"14px"}}>{item.slice(0)}</p></NavLink>                    
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
import React from 'react';

class MenuItem extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.props=props;
    }
    render(){
                
        return(
            /*
            <a className={`btn ${className}`}>
                   
                <img src={`${this.props.icon}`} alt="${this.props.text}"> ${this.props.text}
                   
            </a>
            */
           <li className="btn">
               <span>{this.props.icon} </span>
               <span> {this.props.text}</span>
           </li>
        )
    }
}

export default MenuItem;
import React from 'react';
import './appCard.css'
class AppCard extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.props=props;
    }
    render(){
        const image= this.props.className ? this.props.className : '';
        
        return(
           <div className="card my-2">            
                
                <div className="card-body">
                    {this.props.children}    
                </div>
            </div>
        )
    }
}

export default AppCard;
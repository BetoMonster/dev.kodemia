import React from 'react';

import AppCard from '../AppCard'

class Listing extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.props=props;
    }
    render(){
        const image= this.props.className ? this.props.className : '';
        
        return(
            <main>
                <AppCard>
                    <h6 className="card-title">Senior Java Developer - 100% Remote</h6>
                    <p className="card-text">jobs</p>
                    
                </AppCard>
                <AppCard>
                    <h6 className="card-title">Online Food Delivery System</h6>
                    <p className="card-text">products</p>
                    
                </AppCard>
                <AppCard>
                    <h6 className="card-title">Learn by building a scalable production-ready app from scratch</h6>
                    <p className="card-text">mentors</p>
                    
                </AppCard>
            </main>
        )
    }
}

export default Listing;
import React from 'react';

import AppCard from './AppCard'

class Posts extends React.Component{
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
                    <img className="card-img-top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--F2RRta4a--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thevaluable.dev/images/2021/02_vim_advanced/vim-advanced.jpg" alt="Card image cap"/>
                    <h5 className="card-title">How to send Email with node js for free</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </AppCard>
                <AppCard>
                    <h5 className="card-title">How to send Email with node js for free</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </AppCard>
                <AppCard>
                    <h5 className="card-title">How to send Email with node js for free</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </AppCard>
            </main>
        )
    }
}

export default Posts;

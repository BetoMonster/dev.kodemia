import React from 'react';

import './appThemeToggle.css'

class AppThemeToggle extends React.Component{
    constructor(props){
        super(props);
      
        this.state={theme: 'light'};
        this.togle= this.toggle.bind(this);
    }

    toggle(){
        const theme = this.state.theme === 'light'
        ? 'dark'
        : 'light'
        console.log(theme);
        this.setState({ theme })
    }

    render(){

        return(
            <div 
                className={`appThemeToggle d-flex justify-content-center align-item-center ${this.state.theme}`} 
                onClick={this.toggle}
                //onClick={this.toggle.bind(this)}
            />
        
        
            
        )
    }

    componentDidMount() {
        document.body.setAttribute('theme', this.state.theme);
    }


    componentDidUpdate() {
        document.body.setAttribute('theme', this.state.theme);
    }

    //hooks del ciclo de vida
    /*
    render(){
    }    
    componentWillMount(){
        const now =new Date();
        console.log ('antes de que este en el DOM',now.getTime())
    }

    componentDidMount(){
        const now =new Date();
        console.log ('ya etoy en el DOM',now.getTime())

    }

    componentWillUpdate(){
        const now =new Date();
        console.log ('antes de actualizarse',now.getTime())

    }

    componentDidUpdate(){
        const now =new Date();
        console.log ('cuando ya me actualice',now.getTime())

    }

    componentWillUnmount(){
        const now =new Date();
        console.log ('cuando ya me estoy destruyendo',now.getTime())

    }
    */
}

export default AppThemeToggle;
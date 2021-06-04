//import React from 'react';
import React, { useState, useEffect } from "react";
import "./appLoading.css";

/*class AppLoading extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state={active: true};
    }

    
    render(){
        const active = this.state.active? 'active' :'';

        return(
            <div className={`Loading ${active} align-items-center justify-content-center`}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </div>
            </div>   
               
        )
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({active: false})
        },2000)
    }

}*/

function AppLoading(props) {
  const [active, setActive] = useState(true);

  const clasActive = active ? "active" : "";

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`Loading ${clasActive} align-items-center justify-content-center`}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default AppLoading;

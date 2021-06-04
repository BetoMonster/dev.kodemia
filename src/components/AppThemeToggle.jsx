import React, { useState, useEffect } from "react";

import "./appThemeToggle.css";
/*
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
}
*/

function AppThemeToggle(props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, []);

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, [theme]);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log(newTheme);
    setTheme(newTheme);
    return;
  };

  return (
    <div
      className={`appThemeToggle d-flex justify-content-center align-item-center ${theme}`}
      onClick={toggle}
    />
  );
}

export default AppThemeToggle;

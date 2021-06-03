import React from 'react';

import Header from './components/Header/'
import SideNav from './components/SideNav/'
import Posts from './components/Posts'
import Listing from './components/Listing/'

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/> 
        <div className="container-fluid container-lg">
          <div className="row">
            
            <div className="col-md-3 col-lg-2 d-md-flex d-none p-0 mt-3">
            <SideNav/>
              <aside className="left-aside">

              </aside>
            </div>
            <div className="col-12 col-md-9 col-lg-7 p-0 px-md-2">
              <Posts/>
              
            </div>
            <div className="col-lg-3 d-lg-block d-none p-0">
              <aside className="rigth-aside">
                <Listing/>
              </aside>
            </div>
          </div>
        </div>      
       
       
        
        
      </div>
    )
  }
}

/*function App() {
  return (
    <div>
       Hello WORD!
    </div>
  );
}*/

export default App;

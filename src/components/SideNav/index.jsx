import React from 'react';

import  './index.css';
import MenuItem from './MenuItem';

class SideNav extends React.Component{
  render(){
    return(
        <ul className="mb-6 mt-4 d-flex flex-column">
            <MenuItem 
                
                text="Home"
                icon="🏚"
            />
            <MenuItem 
                text="Listing"
                icon="🕵️‍♂️"
            />
            <MenuItem 
                text="Podcast"
                icon="🎙"
            />
            <MenuItem 
                text="Videos"
                icon="🎥"
            />
            <MenuItem 
                text="Tags"
                icon="📜"
            />
            <MenuItem 
                text="SigIn/Up"
                icon="🔑"
            />

        </ul>


      
    )
  }
}

export default SideNav; 
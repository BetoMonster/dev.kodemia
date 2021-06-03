import React from 'react';

class SearchInput extends React.Component{
  render(){
    return(
      
      <input className="search" type="text" name="q" placeholder="Search..." />
      
    )
  }
}

export default SearchInput;
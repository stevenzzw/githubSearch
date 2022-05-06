import React, { Component } from 'react';
import axios from 'axios';
import Search from './componets/Search';
import List from './componets/List';
class App extends Component {

  render() {
    
    return (
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
        <Search />
        <List/>
       
      </div>

    )
  }

}


export default App;

import React from 'react';
import SearchBar from './Searchbar';
import SearchMaterial from './SearchMaterial';

import './App.css';


export class App extends React.Component {
  public render() {
    return (
      <div>
        <SearchMaterial />
        <br />
        <br />
        <SearchBar />
      </div>
    )
  }
}



export default App;

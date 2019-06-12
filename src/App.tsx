import React from 'react';
// import SearchBar from './Searchbar';
import SearchMaterial from './SearchMaterial';
import Title from './Title';

import './App.css';


export class App extends React.Component {
  public render() {
    return (
      <div>
        <Title />
        <SearchMaterial />
        <br />
        <br />
        {/* <SearchBar /> */}
        {/* <TerracottaTest /> */}
      </div>
    )
  }
}



export default App;

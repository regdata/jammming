import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;

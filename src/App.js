import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Hard-code serchResults until API pull called */
      searchResults: [
        {
          name: 'Song Name1',
          artist: 'Song Artist1',
          album: 'Song Album1',
          id: 's1',
        },
        {
          name: 'Song Name2',
          artist: 'Song Artist2',
          album: 'Song Album2',
          id: 's2',
        },
        {
          name: 'Song Name3',
          artist: 'Song Artist3',
          album: 'Song Album3',
          id: 's3',
        },
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {
          name: 'Playlist Song Name1',
          artist: 'Playlist Song Artist1',
          album: 'Playlist Song Album1',
          id: 'pl1',
        },
        {
          name: 'Playlist Song Name2',
          artist: 'Playlist Song Artist2',
          album: 'Playlist Song Album2',
          id: 'pl2',
        },
        {
          name: 'Playlist Song Name3',
          artist: 'Playlist Song Artist3',
          album: 'Playlist Song Album3',
          id: 'pl3',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
          />
        </div>
      </div>
    );
  }
}

export default App;

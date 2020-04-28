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
          name: 'Song Name4',
          artist: 'Song Artist4',
          album: 'Song Album4',
          id: 's4',
        },
        {
          name: 'Song Name5',
          artist: 'Song Artist5',
          album: 'Song Album5',
          id: 's5',
        },
        {
          name: 'Song Name6',
          artist: 'Song Artist6',
          album: 'Song Album6',
          id: 's6',
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)
    ) {
      return;
    } else {
      this.setState.playlistTracks.append(track);
    }
  }

  removeTrack(track) {
    this.setState.playlistTracks.filter(
      savedTrack => savedTrack.id !== track.id
    );
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name,
    });
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
          />
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
          />
        </div>
      </div>
    );
  }
}

export default App;

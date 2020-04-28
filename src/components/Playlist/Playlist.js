import React from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  render() {
    return (
      <div>
        <input type='text' defaultValue={'New Playlist'} />
        <TrackList />
      </div>
    );
  }
}

export default Playlist;

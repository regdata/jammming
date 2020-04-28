import React from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  render() {
    return (
      <div>
        <input type='text' defaultValue={'New Playlist'} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
      </div>
    );
  }
}

export default Playlist;

import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tracks.map(track => (
          <Track track={track} key={track.id} onAdd={this.props.onAdd} />
        ))}
      </div>
    );
  }
}

export default TrackList;

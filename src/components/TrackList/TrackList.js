import React from 'react';

class TrackList extends React.Component {
  render() {
    return (
      /* This will be used to replace the hard-coded values once API pull is setup

      <div>
        <ul>
          {Track.map((track, i) => {
            return <li key={'track_' + i}>{track}</li>;
          })}
        </ul>
      </div>

      */

      <div>
        <ul>
          <li>Track Name, Track Artist, Track Album</li>
          <li>Track Name, Track Artist, Track Album</li>
          <li>Track Name, Track Artist, Track Album</li>
        </ul>
      </div>
    );
  }
}

export default TrackList;

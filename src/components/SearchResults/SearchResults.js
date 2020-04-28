import React from 'react';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <TrackList tracks={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResults;

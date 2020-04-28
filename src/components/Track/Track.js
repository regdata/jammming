import React from 'react';

class Track extends React.Component {
  renderAction() {
    let isRemoval = true;
    return isRemoval ? '-' : '+';
  }

  render() {
    return (
      <div>
        <h4>{this.props.track.name}</h4>
        <p>
          {this.props.track.artist} | {this.props.track.album}
        </p>
        <button>{this.renderAction()}</button>
      </div>
    );
  }
}

export default Track;

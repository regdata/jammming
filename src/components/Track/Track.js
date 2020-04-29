import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button onClick={this.props.removeTrack}> - </button>;
    } else {
      return <button onClick={this.props.addTrack}> + </button>;
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div>
        <h4>{this.props.track.name}</h4>
        <p>
          {this.props.track.artist} | {this.props.track.album}
        </p>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;

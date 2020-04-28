import React from 'react';

class Track extends React.Component {
  renderAction() {
    let isRemoval = true;
    return isRemoval ? '-' : '+';
  }

  render() {
    return (
      <div>
        <h4>Track Name</h4>
        <p>Track Artist</p>
        <p>Track Album</p>
        <button>{this.renderAction()}</button>
      </div>
    );
  }
}

export default Track;

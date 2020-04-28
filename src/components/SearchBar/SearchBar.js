import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.searchTerm);
  }
  handleTermChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleTermChange} />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchBar;

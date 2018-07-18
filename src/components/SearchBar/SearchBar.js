import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review-count'
}


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map((option, i) => {
      let sortByOptionsValue = sortByOptions[option];
      return <li onClick={this.handleSortByChange.bind(this, this.sortByOptionValue)} className={this.getSortByClass(sortByOptionsValue)} key={i}>{option}</li>
    })
  }

  getSortByClass(sortByOption){
    if (this.state.sortBy === sortByOption){
      return 'active'
    }else{
      return ''
    }
  }

  handleSortByChange(sortByOption){
    this.setState({ sortBy: sortByOption })
  }

  handleTermChange(e){
    this.setState({ term: e.target.value })
  }

  handleLocationChange(e){
    this.setState({ location: e.target.value})
  }


  render() {
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;

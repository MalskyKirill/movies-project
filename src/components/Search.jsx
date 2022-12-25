import React from 'react';

class Search extends React.Component {

  state = {
    search: '',
    type: 'all',
  }

  handleKey = (evt) => {
    if (evt.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }

  handleFilter = (evt) => {
    this.setState(() => ({type: evt.target.dataset.type }), () => {this.props.searchMovies(this.state.search, this.state.type);})
  }

  render() {
    return (
      <div className="row">
        <div className="input-field ">
          <input
            placeholder='search'
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(evt) => this.setState({ search: evt.target.value })}
            onKeyDown={this.handleKey}
          />
          <button className='btn search-btn' onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
        </div>
        <div>
          <label>
            <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFilter}
              checked={this.state.type === "all"} />
            <span>All</span>
          </label>
          <label>
            <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter}
              checked={this.state.type === "movie"} />
            <span>Movies</span>
          </label>
          <label>
            <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter}
              checked={this.state.type === 'series'} />
            <span>Series</span>
          </label>
        </div>
      </div>
    )
  }
}

export { Search };

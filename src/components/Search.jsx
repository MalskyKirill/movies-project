import React, {useState} from 'react';

function Search(props) {
  const {searchMovies = Function.prototype} = props;


  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (evt) => {
    if (evt.key === 'Enter') {
      searchMovies(search, type);
    }
  }

  console.log(search)

  const handleFilter = (evt) => {
    setType(evt.target.dataset.type)
    searchMovies(search, evt.target.dataset.type);

  }

    return (
      <div className="row">
        <div className="input-field ">
          <input
            placeholder='search'
            type="search"
            className="validate"
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
            onKeyDown={handleKey}
          />
          <button className='btn search-btn' onClick={() => searchMovies(search, type)}>Search</button>
        </div>
        <div>
          <label>
            <input className="with-gap" name="type" type="radio" data-type="all" onChange={handleFilter}
              checked={type === "all"} />
            <span>All</span>
          </label>
          <label>
            <input className="with-gap" name="type" type="radio" data-type="movie" onChange={handleFilter}
              checked={type === "movie"} disabled={search ? false : true}/>
            <span>Movies</span>
          </label>
          <label>
            <input className="with-gap" name="type" type="radio" data-type="series" onChange={handleFilter}
              checked={type === 'series'} disabled={search ? false : true}/>
            <span>Series</span>
          </label>
        </div>
      </div>
    )
}

export { Search };

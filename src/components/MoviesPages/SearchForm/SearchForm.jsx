import './SearchForm.scss';
import { useState, useEffect } from 'react';

function SearchForm({onSearch, movies, filterParams}) {
  const [searchValue, setSearchValue] = useState(filterParams.name);
  const [filterValue, setFilterValue] = useState(filterParams.short);

  function handleSearchTyping(e) {
    setSearchValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    search()
  }

  function search() {
    onSearch({
      name: searchValue ? searchValue.trim().toLowerCase() : '',
      short: filterValue
    })
  }

  useEffect(() => {
    if(movies.length > 0) { 
      search() 
    }
  }, [filterValue])

  return (
    <section className="search-form">
      <form className="search-form__box" onSubmit={handleSearch}>
        <input type="text" className="search-form__input" placeholder='Фильм' 
          value={searchValue} onChange={handleSearchTyping} />
        <button type="submit" className="search-form__submit-btn">Найти</button>
      </form>
      <label className="search-form__toggle" htmlFor="toggle">
        <input type="checkbox" value={filterValue} className="search-form__toggle-input" id="toggle" onChange={() => setFilterValue(state => !state)}/>
        <div className="search-form__toggle-track">
          <div className={`search-form__toggle-track-space ${filterValue ? 'search-form__toggle-track-space_state_checked' : 'search-form__toggle-track-space_state_not-checked'}`}></div>
          <div className='search-form__toggle-indicator' />
        </div>
        <span className="search-form__toggle-name">Короткометражки</span>
      </label>
    </section>
  )
}

export default SearchForm;
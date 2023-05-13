import './SearchForm.scss';
import { useState } from 'react';

function SearchForm() {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(false);

  function handleSearchTyping(e) {
    setSearchValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <section className="search-form">
      <form className="search-form__box" onSubmit={handleSearch}>
        <input type="text" className="search-form__input" placeholder='Фильм' 
          value={searchValue} onChange={handleSearchTyping} />
        <button type="submit" className="search-form__submit-btn">Найти</button>
      </form>
      <label className="search-form__toggle" htmlFor="toggle">
        <input type="checkbox" value={filterValue} className="search-form__toggle-input" id="toggle" onClick={() => {setFilterValue(state => !state)}}/>
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
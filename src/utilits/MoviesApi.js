class MoviesApi {
  constructor() {
    this._url = 'https://api.nomoreparties.co/beatfilm-movies';
  }
  
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._url)
      .then((res) => this._getResponse(res))
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;
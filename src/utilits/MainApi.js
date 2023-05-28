class MainApi {
  constructor() {
    this._url = 'https://api.dewhitefilms.nomoredomains.monster';
  }
  
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('JWT')}`
      }
    })
    .then((res) => this._getResponse(res))
  }

  updateUserInfo(newInfo) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('JWT')}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newInfo)
    })
    .then((res) => this._getResponse(res))
  }

  signup(userData) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((res) => this._getResponse(res))
  }

  signin(inputData) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(inputData)
    })
    .then((res) => this._getResponse(res))
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('JWT')}`,
        'Content-type': 'application/json'
      }
    })
    .then((res) => this._getResponse(res))
  }
  
  addMovie(movieInfo) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('JWT')}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(movieInfo)
    })
    .then((res) => this._getResponse(res))
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('JWT')}`,
        'Content-type': 'application/json'
      }
    })
    .then((res) => this._getResponse(res))
  }
}

const mainApi = new MainApi();

export default mainApi;
class MainApi {
  constructor() {
    this._url = 'https://api.dewhitefilms.nomoredomains.monster';
    this._token = localStorage.getItem('JWT');
    this._headers =  {
        authorization: `Bearer ${this._token}`,
        'Content-type': 'application/json'
      }
  }
  
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo(token) {
    if(token) {
      this._token = token 
    }
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${this._token}`
      }
    })
    .then((res) => this._getResponse(res))
  }

  updateUserInfo(newInfo) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(newInfo)
    })
    .then((res) => this._getResponse(res))
  }

  signup(userData) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(userData)
    })
    .then((res) => this._getResponse(res))
  }

  signin(inputData) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(inputData)
    })
    .then((res) => this._getResponse(res))
    .then((res) => {
      this._token = res.token;
      this._headers =  {
        authorization: `Bearer ${this._token}`,
        'Content-type': 'application/json'
      }
      return res
    })
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers
    })
    .then((res) => this._getResponse(res))
  }
  
  addMovie(movieInfo) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movieInfo)
    })
    .then((res) => this._getResponse(res))
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._getResponse(res))
  }
}

const mainApi = new MainApi();

export default mainApi;
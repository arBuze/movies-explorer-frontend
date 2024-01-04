class AuthApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name
      })
    })
      .then((response) => {
        return this._getResponseData(response);
      })
      .then((res) => {
        return res;
      });
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email
      })
    })
      .then((response) => {
        return this._getResponseData(response);
      })
      .then((data) => {
        if (data){
          localStorage.setItem('jwt', data.token);
          return data;
        }
      });
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Authorization" : `Bearer ${token}`,
        ...this._headers
      }
    })
    .then((response) => {
      return this._getResponseData(response);
    })
    .then(data => data);
  }
}

export const auth = new AuthApi({
  baseUrl: 'https://api.asid.movies-explore.nomoredomainsmonster.ru', /* 'http://localhost:3000' */
  headers: {
    'Content-Type': 'application/json'
  }
});

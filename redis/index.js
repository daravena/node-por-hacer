const axios = require('axios');

class StoreManager {
  constructor({
    url = ''
  }) {
    this.http = axios.create({
      baseURL: url
    });
  }

  get(id) {
    return this.http.get(`/${id}`);
  }

  save(id, document) {
    return this.http.post('', { id, document });
  }

  update(id, document) {
    return this.http.put('', { id, document });
  }
}

module.exports = { StoreManager };


const axios = require('axios');

class GoogleBooksApiService {

    async search(query) {
        return await axios
                    .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                    .then(res => res.data);
    }

}

module.exports = GoogleBooksApiService;
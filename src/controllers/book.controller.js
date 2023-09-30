
const GoogleBooksApiService = require("../services/googlebooks-api.service");

module.exports.searchBooks = async (req, res) => {
  const { q } = req.query;

  if(!q) {
    res.status(400).json({message: "Fill in the search field."})
  }

  const service = new GoogleBooksApiService();

  const books = await service.search(q);
  
  res.json(books);
};
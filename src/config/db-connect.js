const mongoose = require('mongoose');
require("dotenv").config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;



const dbConnect = async () => {
    try {
      const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

      mongoose.set("strictQuery", false);
      mongoose.connect(DB_URL, { useNewUrlParser: true });
      
      console.log("Db Connected.");

    } catch (err) {
      console.log(err);
      process.exit();
    }
  };
  
module.exports = dbConnect;
const express =  require("express");
const cors =  require("cors");
const HandleErrors = require('./utils/error-handler.util');
const dbConnect = require('./config/db-connect');

require("dotenv").config();

const PORT = process.env.NODE_APP_PORT || 8080;

dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", require("./routes/index.route"));

app.use(HandleErrors);

app.listen(PORT, () => console.log(`App started on port ${PORT}`));
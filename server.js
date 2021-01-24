const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("Udało się połączyć z MongoDB."));

const articleRouter = require("./routes/articles");

app.use("/articles", articleRouter);

app.listen(port, () => console.log(`Aplikacja dziala na porcie: ${port}`));

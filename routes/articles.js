const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");

//GET pobierający wszystkie artykuły
router.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error: ${err}"));
});

//ADD = POST nowy artykuł
router.post("/add", (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    authorname: req.body.authorname,
  });

  newArticle
    .save()
    .then(() => res.json("Nowy artykuł został opublikowany."))
    .catch((err) => res.status(400).json("Error: ${err}"));
});

// FIND - znajdź artykuł po ID
router.get("/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error: ${err}"));
});

//FIND - znajdź artykuł po ID i UPDATE
router.put("/update/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => {
      (article.title = req.body), title;
      article.article = req.body.article;
      article.authorname = req.body.authorname;

      article
        .save()
        .then(() => res.json("Artykuł został zmodyfikowany poprawnie"))
        .catch((err) => res.sendStatus(400).json("Error: ${err}"));
    })
    .catch((err) => res.sendStatus(400).json("Error: ${err}"));
});

//FIND - znajdź artykuł po ID i DELETE
router.delete("/:id", (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("Artykuł został usunięty."))
    .catch((err) => res.sendStatus(400).json("Error: ${err}"));
});

module.exports = router;

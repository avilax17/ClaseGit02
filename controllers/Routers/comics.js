const comicsRouter = require('express').Router();

router.get("/todo", comicsController.getComics);

module.exports = router;


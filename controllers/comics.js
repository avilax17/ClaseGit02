const comicsController = {};

comicsController.getComics =(req,res)=> {res.send({message: 'hola mundo!'})} 

const axios = require("axios")

comicsController.getComics = (req, res) => {
  const POKEMON_API = process.env.POKEMON_API

  axios.get(POKEMON_API + '/pokemon')
    .then(resp => (res.data))
    }
module.exports = comicsController

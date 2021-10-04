const express = require("express")
const movieRouter = express.Router()
const Movie = require("../models/movie.js")

movierRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})
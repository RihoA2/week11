const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/search', (req, res) => {
    res.render('search', { movieDetails:'' });

});
app.post('/search', (req, res) => {

    let movieData = {
        title: 'Free Guy',
        year: 2021,
        genres: 'Comedy, Action, Adventure, Science Fiction.',
        overview: 'A bank teller discovers he is actually a background player in an open-world video game, and decides to become the hero of his own story.',
        posterUrl: 'https://rihoa2.github.io/week3/images/freeGuy.jpg'
    };

    res.render('search', {movieDetails: movieData});

});



app.listen(3000, ()=> {
    console.log('jo')


});
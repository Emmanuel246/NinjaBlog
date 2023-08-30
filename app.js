const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./router/blogroutes')


// express app
const app = express();

// connecting to mongodb atlas
const dbURI = ("mongodb://127.0.0.1:27017/nodetutorial");
mongoose.connect(dbURI, {useNewUrlParser:true, UseUnifiedTopology:true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// listen for request




// morgan middleware & static files
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {

    res.redirect('/blogs')
});

app.get('/about', (req, res) => {

    res.render('about', {title: 'About'});

});

//blog route
app.use('/blogs', blogRoutes)


// 404 page
app.use((req, res) => {
    res.status(404).render('404',{title: '404'});
});
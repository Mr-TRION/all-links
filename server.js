const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('*', (req, res) => {
    res.render('home')
});

app.listen(3000, () => {
    console.log('Serving on port 3000')
})
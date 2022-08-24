const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const India = require('./models/india');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/indiancities');
    console.log("database connected!!")
}

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', async (req, res) => {
    const indias = await India.find({});
    res.render('indias/home', { indias })
});
app.get('/topcities', async (req, res) => {
    const indias = await India.find({});
    res.render('indias/cities', { indias })
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await India.findByIdAndDelete(id);
    res.redirect('/');
})






app.listen(3000, () => {
    console.log("Serving on Port 3000");
})
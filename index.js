const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const courses = require('./data/courses.json');
const category = require('./data/category.json');

app.use(cors());

app.listen(port, () => {
    console.log('server listening on port', port)
});

app.get('/', (req, res) => {
    res.send('server running');
});

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    const categories = category.find(c => c.id === id);
    res.send(categories);
})

app.get('/courses/:id', (req,res) => {
    const id = req.params.id;
    console.log('id', id);

    const course = courses.find(c => c.id === id);
    res.send(course);
})


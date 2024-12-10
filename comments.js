// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const comments = [
    {
        id: 1,
        user: 'User1',
        comment: 'Comment1'
    },
    {
        id: 2,
        user: 'User2',
        comment: 'Comment2'
    }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.listen(3000, () => {
    console.log('Server is running');
});

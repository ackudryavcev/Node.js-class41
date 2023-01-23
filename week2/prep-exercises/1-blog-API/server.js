const express = require('express')
const app = express();
const fs = require("fs");


app.use(express.json());

// create  - POST 
app.post('/blogs', (req, res) => {
    const { title, content } = req.body;
    if (title && content) {
        fs.writeFileSync(title, content);
        res.end('ok')
    } else {
        res.status(400).send({ error: 'title and content are required' });
    }
});

// update - PUT
app.put('/posts/:title', (req, res) => {
    const title = req.params.title;
    const content = req.body.content;
    if (title && content) {
        if (fs.existsSync(title)) {
            fs.writeFileSync(title, content);
            res.end('ok')
        } else {
            res.status(404).send({ error: 'This post does not exist!' });
        }
    } else {
        res.status(400).send({ error: 'title and content are required' });
    }
});
// delete - DELETE
app.delete('/blogs/:title', (req, res) => {
    const title = req.params.title;
    if (title) {
        if (fs.existsSync(title)) {
            fs.unlinkSync(title);
            res.end('ok');
        } else {
            res.status(404).send({ error: 'This post does not exist!' });
        }
    } else {
        res.status(400).send({ error: 'title and content are required' });
    }
});

//read - GET
app.get('/blogs/:title', (req, res) => {
    const title = req.params.title;
    if (title) {
        if (fs.existsSync(title)) {
            const post = fs.readFileSync(title);
            res.end(post);
        } else {
            res.end('This post does not exist!');
        }
    } else {
        res.status(400).send({ error: 'title is required' });
    }
})


app.get('/', function(req, res) {
    res.send('Hello World')
});

app.get('/blogs', (req, res) => {
    const files = fs.readdirSync('./');
    const titleArr = files.map(file => {
        return { title: file }
    });
    res.send(titleArr);
});

app.listen(3000)
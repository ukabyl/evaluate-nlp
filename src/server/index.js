var path = require('path')
const express = require('express')
const dotenv = require('dotenv');

const aylien = require('aylien_textapi');
const bodyParser = require('body-parser');
dotenv.config();
const app = express()

const nlp = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

app.use(express.static('dist'))
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    // Showing index html file
    res.sendFile(path.resolve('dist/index.html'))
})

// The server starts working with the port
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// Handling request to analyze endpoing
app.post('/analyze', function (req, res) {
    const article = req.body.article;

    nlp.sentiment({
        'mode': 'document',
        'text': article

    }, (err, response) => {
        if (err === null) {
            res.send(JSON.stringify(response));
        } else {
            const errorMessage = {
                'errorMessage': "Something was wrong",
            }
            res.send(JSON.stringify(errorMessage));
        }
    });
    
    
})
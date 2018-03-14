const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'www')));

app.post('/checkout', function(req, res){
    res.setHeader('Content-Type', 'application/json');

    //mimic a slow network connection
    setTimeout(function(){

        res.send(JSON.stringify({
            cart: req.body || null
        }));

    }, 1000);

    //debugging output for the terminal
    //console.log('you posted: Cart: ' + req.body);
});

//wait for a connection
app.listen(8080, function () {
    console.log('Server is running.');
});
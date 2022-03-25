const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyPraser = require('body-parser');
let app = express();

const clientPath = path.join(__dirname, '../public');
const formSubmit = path.join(__dirname, '../formsubmissions.json');

app.use(bodyPraser.json());

app.use(express.static(clientPath));

app.post('/formsubmissions', (req, res) => {
    console.log(req.body);
    let formValue = JSON.stringify(req.body)
    fs.writeFile(formSubmit, formValur, (err) => {
        if (err) {console.log(err);}
    })
    res.send('Thanks for Submitting!');
});

/* app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello from the dark side...')
});

*/





app.listen(3000, () => {
    console.log('listening to port 3000');
});
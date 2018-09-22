const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config

app.use(express.static(path.join(__dirname, './build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
const port = process.env.PORT || 8007

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

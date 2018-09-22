const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config

app.use(express.static(path.join(__dirname, './build')));

const port = process.env.PORT || 8007

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

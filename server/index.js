const express = require('express');
const app = express();

app.listen(8080, (req, res) => {
    res.send("Hello World")
})


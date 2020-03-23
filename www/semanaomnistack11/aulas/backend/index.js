const express = require('express');

app.get("/", (resquest, response) => {
    return response.send('Hello World');
});

const app = express();

app.listen(3333);
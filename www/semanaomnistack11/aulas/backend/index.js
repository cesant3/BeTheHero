const express = require('express');

const app = express();

app.get("/", (resquest, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Carlos Eduardo'
    });
});

app.listen(3333);
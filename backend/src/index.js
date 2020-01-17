const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors');

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-7mysn.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);
// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)

// Route Params: request.params (Identificar um recurso na alteração 
// ou remoção)

// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (não-relacional)


// app.post('/users', (request, response) => {
//     console.log(request.body);
//     //return response.json(request.body.name)
//     return response.json({message: 'Hello Omnistack'});
// });

app.listen(3333);
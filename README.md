# Anotações:

## Backend
### src/controllers/DevController.js
- index, show, store, update, destroy -> logica dos controllers
### src/index.js
-   Métodos HTTP: GET, POST, PUT, DELETE

    Tipos de parâmetros:

    Query Params: request.query (Filtros, ordenação, paginação, ...)

    Route Params: request.params (Identificar um recurso na alteração 
    ou remoção)
    
    Body: request.body (Dados para criação ou alteração de um registro)
## Web
### App.js
- No React se usa 'htmlFor' e 'className' ao inves de for e class, por serem palavras reservadas no js.
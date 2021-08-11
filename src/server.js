const http = require('./app');

const port = 4000;

http.listen(port, () => {
    console.log('Escuchando en el puerto', port);
});
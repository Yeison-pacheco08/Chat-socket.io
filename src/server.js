const http = require('./app');

const port = 4000;

http.listen(port, () => {
    console.log('server is running on port', port);
});
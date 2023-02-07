
const http = require("http");



const requestListener = function(request, response) {
    response.writeHead(200);
    response.end("This is Mohammed Shafayath Ali ");
}

   const server = http.createServer(requestListener);

   server.listen(80, 'localhost', () => {
    console.log('ali server is running.....')
   });
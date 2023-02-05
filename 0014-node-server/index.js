// HTTP Server Module
// NodeJS InBuild Module (http)



const http = require("http");

// const server = http.createServer(function (request, respones) {
// respones.writeHead(200);
// respones.end("data server from node server")
// });




const requestListener = function(request, response) {
    response.writeHead(200);
    response.end("This is Mohammed Shafayath Ali ");
}

   const server = http.createServer(requestListener);

   server.listen(80, 'localhost', () => {
    console.log('ali server is running.....')
   });
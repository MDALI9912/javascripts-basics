// HTTP Server module
// NodeJS Inbuil module (http)



const http = require("http");


    // const server = http.createserver(function (request, response) {
    // response.writehead(200);
    // response.end("data server from node server")
    // });
    
    const requestlistener = function(request, response) {
        response.writehead(200);
        response.end("data from node server");
    }
    const server = http.createserver(requestlistener);


   

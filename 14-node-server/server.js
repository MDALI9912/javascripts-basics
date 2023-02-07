const http = require("http");
const server = http.createServer( (request, response) => {

    const name =[
        
        "md",
        "shafayath",
        "ali"
    ];

    const convertingNamesIntoString = JSON.stringify(name);

    response.writeHead(300);
    response.end(convertingNamesIntoString);

// json.parse => it convert your "string" type array/object into original object/array
// json.string => it convet your array/object instance into plain string

});

server.listen(81, "localhost",() => {
    console.log(`Server is runing on http://localhost:81`)
});
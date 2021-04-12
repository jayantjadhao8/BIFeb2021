var http = require("http")
function myfunc(request, response){
    console.log("My app got started")
    response.writeHead(200,{"content-Types":"text/plain"})
    response.write("Hello Jayant")
    response.end()
}
http.createServer(myfunc).listen(8888)
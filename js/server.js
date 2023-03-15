var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/:input', function(req, res){
    if (req.params.input[0] == 'b') {
        if (req.params.input[1] == 'u') {
            if (req.params.input[2] == 'g') {
                // abort the program!
                process.abort();
            }
        }
    }  
    res.send('The id you specified is ' + req.params.input);
 });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
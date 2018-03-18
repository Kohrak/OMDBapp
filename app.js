var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
var key = "http://www.omdbapi.com/?i=tt3896198&apikey=a0a29a51"
app.get("/results", function(req, res){
    console.log("access results");
    request(key + "&s=california", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        } else {
            res.send("Oh no " + error);
        }
    })
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("lets roll")
});
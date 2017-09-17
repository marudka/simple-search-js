var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    cities = require("./cities.json");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/cities", function (req, res) {
    res.send(201, cities);
});

app.listen(port);

console.log("RESTful API server started on: " + port);

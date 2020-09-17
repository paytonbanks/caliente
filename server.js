// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { getMaxListeners } = require("process");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000; //lets heroku decide the path 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const waiting = [{

        name: "Eric",
        id: 1,
        phoneNumber: "952-288-5051",
        email: "elafontsee@gmail.com"
    },
    {
        name: "Haley",
        id: 2,
        phoneNumber: "555-1234",
        email: "HMyers@gmail.com"
    },
    {
        name: "Miller",
        id: 3,
        phoneNumber: "555-4321",
        email: "MRich@gmail.com"
    },
    {
        name: "Payton",
        id: 4,
        phoneNumber: "555-5678",
        email: "Payton@gmail.com"
    }
];

const reservation = [];
const waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});
app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
});
// app.get("/api/waiting/:item", function(req, res) {
//     var current = req.params.item;
//     console.log(current);
//     for (var i = 0; i < waiting.length; i++) {
//         if (current === waiting[i].id) {
//             return res.json(waiting[i]);
//         }
//     }
//     return res.json(false);
// });
// Create New Characters - takes in JSON input
app.post("/api/waiting", function(req, res) {
    var party = req.body;
    console.log(party);
    if (reservation.length <= 5) {
        reservation.push(party);
    } else {
        waitList.push(party);
    }
    res.json(party);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
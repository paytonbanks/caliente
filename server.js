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

var waiting = [{

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

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all characters
app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
});


// Displays a single character, or returns false
//Might not need this
app.get("/api/waiting/:item", function(req, res) {
    var current = req.params.item;

    console.log(current);

    for (var i = 0; i < waiting.length; i++) {
        if (current === waiting[i].id) {
            return res.json(waiting[i]);
        }
    }

    return res.json(false);
});

// Create New reservation - takes in JSON input
app.post("/api/waiting", function(req, res) {
    console.log(req.body);
    
    var item = req.body;
    console.log(item);
    waiting.push(item);
    res.json(item);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000; //lets heroku decide the path 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var waiting = [{
        routeName: "eric",
        name: "Eric",
        id: 1,
    },
    {
        routeName: "haley",
        name: "Haley",
        id: 2,
    },
    {
        routeName: "miller",
        name: "Miller",
        id: 3,
    },
    {
        routeName: "payton",
        name: "Payton",
        id: 4,
    }
];

// app.get("/", function(req, res) {
//     // res.send("Welcome to the Star Wars Page!")
//     res.sendFile(path.join(__dirname, "view.html"));
// });

// Displays all characters
app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
});


// Displays a single character, or returns false
app.get("/api/waiting/:newwaiting", function(req, res) {
    var current = req.params.newwaiting;

    console.log(current);

    for (var i = 0; i < waiting.length; i++) {
        if (current === waiting[i].routeName) {
            return res.json(waiting[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
// app.post("/api/waiting", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newWaiting = req.body;

//     console.log(newWaiting);

//     // We then add the json the user sent to the character array
//     characters.push(newWaiting);

//     // We then display the JSON to the users
//     res.json(newWaiting);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
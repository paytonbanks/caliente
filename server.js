// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000; //lets heroku decide the path 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var waitingList = [{
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
        routeName: "obiwankenobi",
        name: "Obi Wan Kenobi",
        role: "Jedi Master",
        age: 55,
        forcePoints: 1350
    }
];

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all characters
app.get("/api/characters", function(req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    console.log(newcharacter);

    // We then add the json the user sent to the character array
    characters.push(newcharacter);

    // We then display the JSON to the users
    res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
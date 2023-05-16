// Dependency
var express = require("express");

// Create express server
var app = express();

// Initialize port to use
var PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Point our server to route files to map how to respond when the user visits/requests data from the specified URL
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts server
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});

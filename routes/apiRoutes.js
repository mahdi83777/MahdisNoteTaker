// Require libraries
var data = require("../db/db.json");
var fs = require("fs");

// Route

module.exports = function (app) {
  // API GET Request
  app.get("/api/notes", function (req, res) {
    // Read db.json file and return all saved notes as JSON
    res.json(data);
  });

  // API POST Request
  app.post("/api/notes", function (req, res) {
    // Receive the new note body and add it to the db Json file
    data.push(req.body);
    // Add unique id to each note
    data.forEach((object, i) => {
      object.id = i + 1;
    });
    // Return the new note to the client
    fs.writeFile("./db/db.json", JSON.stringify(data), function () {
      res.json(data);
    });
  });

  // // API DELETE Request
  app.delete("/api/notes/:id", function(req, res) {
    // Get the selected id note and assign to variable
    let idNote = req.params.id;
    console.log(`Deleted note with id ${idNote}`);
    // filter to remove the selected note
    data = data.filter(currentN => {
       return currentN.id != idNote;
    });
    // Reassign each id to the note
    data.forEach((object, i) => {
        object.id = i + 1;
      });
      // Return remaining notes to the client
    fs.writeFile("./db/db.json", JSON.stringify(data), function () {
        res.json(data);
      });
}); 
};

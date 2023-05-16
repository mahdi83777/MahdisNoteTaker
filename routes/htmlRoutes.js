var path = require("path");

module.exports = function (app) {
  // HTML GET Request when user visits a page

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Default to home if not found
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars")

// sequelize mysql bd
const db = require("./models")


// initiate service 
const app = express();
const PORT = process.env.PORT  || 8080;

// routers 
require("./controllers/Router/routers")(app)
app.use(express.static("."));
// app.use('*/css',express.static('/public'));
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



db.sequelize.sync().then(function(){

app.listen(PORT, function(){
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
})
})
 



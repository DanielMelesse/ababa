const express = require("express");
const bodyParser = require("body-parser");


// initiate service 
const app = express();
const PORT = process.env.PORT  || 8080;

// routers 
require("./app/Controllers/Router/routers")(app)



app.listen(PORT, function(){
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
})
 



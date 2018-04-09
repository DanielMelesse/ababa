// all the routers get to.


module.exports = function(app){

    // landing page
    app.get('/', function(req, res){
        console.log("landing page")
        res.json({message: "Welcome to ababa.com"})
    })


    app.get('/login', function(req, res){
        console.log("login")
        res.json({message: "hello addis ababa, you have logged in"})
    })


    app.get('/logout', function(req, res){
        console.log("logout")
        res.json({message: "logged out"})
    })


    app.get('/signup', function(req, res){
        console.log("signup ")
        res.json({message: "hello addis ababa, you have signup"})
    })

     // landing page
     app.get('/dashboard', function(req, res){
        console.log("dashboard")
        res.json({message: "hello addis ababa user, dashborad on it way"})
    })

      // landing page
      app.get('/report', function(req, res){
        console.log("report")
        res.json({message: "hello addis ababa, report on it way"})
    })

     // landing page
     app.post('/sell', function(req, res){
        console.log("sell")
        res.json({message: "hello addis ababa, selling someting"})
    })

      // landing page
      app.post('/buy', function(req, res){
        console.log("buy")
        res.json({message: "hello addis ababa user, buying something"})
    })

}
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.userid){
    res.send(`Here is the information for you (${req.session.userid})`)
  } else {
    res.send("error: You must be logged in")
  }
});

router.post('/login', (req, res) => {

  if(req.session.userid){
    res.send("Error: you are already logged in as " + req.session.userid )
    return
  }

  // check username and password; TODO in real world, don't hardcode the check here; pull the data 
  // from outside the source (encrypted database, preferably).
  if(req.body.username == "asfg" && req.body.password == "12345"){
    let sessionId = Math.random().toString(36).substring(2, 15);
    req.session.userid = "asfg"
    req.session.sessionid = sessionId;
    res.send("you logged in")
  } else if(req.body.username == "anotheruser" && req.body.password == "pwd"){
    req.session.userid = "anotheruser"
    res.send("you logged in")
  } else {
    res.send("wrong login info")
  }
})

router.get('/myprofle', function(req, res) {
  let username = req.session.userid;
  res.send(`<h1>${username}</h1>`)
})

router.post('/logout', (req, res) => {
  req.session.destroy()
  res.send("you are logged out")
})

export default router;

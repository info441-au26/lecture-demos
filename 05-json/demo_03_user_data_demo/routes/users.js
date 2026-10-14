import {promises as fs} from 'fs'
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("GETTING /users")
  let userInfo = await fs.readFile("data/usersData.json")
  res.type("json")
  res.send(userInfo)
});

// ex 1: presume that request is /api/users?animal=cat
// ex 2: presume body is json and i can .key it
router.post('/', function(req, res, next) {
  console.log(
    "POSTING /users, name param is: " + 
    req.body.first_name
  );

  res.type("json")
  res.send({'user': 'a'})
});

















// router.post('/', async (req, res) => {
//   console.log(req.body)

//   await fs.writeFile("data/usersData.json", 
//     JSON.stringify(req.body))
  
//   res.send("success")
// })



export default router;

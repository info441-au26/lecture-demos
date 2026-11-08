import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query['name'] === "alessia") {
    if (req.query['password'] === "1234") {
      // successful login
      let sessionId = Math.random().toString(36).substring(2, 15);
      req.session = sessionId;
    }
  }

  next()
});

router.get('/', (req, res) => {
  res.send(req.session)
})

export default router;

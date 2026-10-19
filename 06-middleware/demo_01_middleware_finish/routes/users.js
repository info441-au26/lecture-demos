import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET /users/alessia */
router.get('/:username', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;

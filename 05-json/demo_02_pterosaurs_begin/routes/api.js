import express from 'express';
import {promises as fs} from 'fs'


import pterosaurs from '../data/pterosaur.json' with { "type": "json" };

let pterosaurs = {
  'name': 'dino',
}

var router = express.Router();

/* GET pterosaur listing. */
router.get('/pterosaurs', async function(req, res, next) {
  let pterosaurs = await fs.readFile("./data/pterosaur.json");
  res.send(pterosaurs);
});

router.get('/trex', function(req, res, next) {
  res.status(500);
  res.send({
    "message": "Not yet implemented"
  })
});

export default router;

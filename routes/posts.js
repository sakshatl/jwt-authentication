const router = require('express').Router();
const verifyAuth = require('../verifyAuth');

router.get('/', verifyAuth, (req, res) => {
  res.send(req.user); // we have access to the current user.
})


module.exports = router;
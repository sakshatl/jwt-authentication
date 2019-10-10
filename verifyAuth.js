const jwt = require('jsonwebtoken');

module.exports = function verifyAuth(req, res, next){
  const token = req.header('auth-token');
  if(!token){
    return res.status(401).send("Access Denied");
  } else {
      try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next(); // move to the next piece of middleware.
      }
      catch(err){
        return res.status(400).send("Invalid Token");
    }
  }
}
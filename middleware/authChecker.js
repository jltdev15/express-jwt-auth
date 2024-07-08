const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
  try {
    const cookies = req.cookies["jwt"];
    jwt.verify(cookies, "secret_ko_to", (err, user) => {
      if (err) return res.sendStatus(401);
      req.user = user;
      next();
    });
    console.log(cookies);
  } catch (err) {
    res.status(401).json({
      content: err,
    });
  }
};

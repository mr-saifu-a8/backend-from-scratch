const jwt = require('jsonwebtoken')
 
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Token required",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token required"
    })
  }

  try {
    const decode = jwt.verify(token, "SECRECT_KEY")
    req.userId = decode.userId
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Ivalid token"
    })
  }
}

module.exports = authMiddleware
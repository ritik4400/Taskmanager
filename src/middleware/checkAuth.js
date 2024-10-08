const jwt = require('jsonwebtoken');

// Middleware to check authentication
const checkAuth = (req, res, next) => {
  // Extract token from Authorization header
  const authHeader = req.get('Authorization'); // More reliable method
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  // Verify token using JWT_SECRET
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      const message = err.name === 'TokenExpiredError' 
                      ? 'Token has expired' 
                      : 'Invalid token';
      return res.status(401).json({ message });
    }

    // Token is valid, attach decoded user info to req
    req.user = decoded;
    next(); // Proceed to the next middleware
  });
};

module.exports =  { checkAuth }

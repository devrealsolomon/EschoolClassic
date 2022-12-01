const { isTokenValid } = require("../utils");
const CustomError = require("../errors");
const authenticateUser = async (req, res, next) => {
  const AuthorizationHeader = req.headers.authorization;

  if (!AuthorizationHeader || !AuthorizationHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "No token value provided" });
  }
  const token = AuthorizationHeader.split(" ")[1];
  try {
    const { school_name, school_id, ownership } = isTokenValid({ token });
    req.school = { school_name, school_id, ownership };
    next();
  } catch (error) {
    // throw new CustomError.UnauthenticatedError("Invalid authentication x");
    return res.status(403).json({ message: "Wrong token value provided" });
  }
};
const authenticateAdmin = async (req, res, next) => {
  const AuthorizationHeader = req.headers.authorization;

  if (!AuthorizationHeader || !AuthorizationHeader.startsWith("Bearer")) {
    throw new CustomError.UnauthenticatedError("Invalid authentication xx");
  }
  const token = AuthorizationHeader.split(" ")[1];
  try {
    const { username, name, userId, role } = isTokenValid({ token });
    req.user = { username, name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Invalid authentication x");
  }
};
const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(401)
        .json({ message: "Only admins can access this resource" });
    }
    next();
  };
};

module.exports = { authenticateUser, authorizePermissions, authenticateAdmin };

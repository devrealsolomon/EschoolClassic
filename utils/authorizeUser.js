const Error = require("../errors");
const authorizeUser = (currentUser, school_name) => {
  if (currentUser.role === "admin") return;
  if (currentUser.school_name === school_name) return;
  throw new Error.UnauthorizedError(
    "You are not authorized to access these resource"
  );
};
const authorizeAdmin = (currentUser, itemId) => {
  if (currentUser.userId === itemId) return;
  throw new Error.UnauthorizedError(
    "You are not authorized to access these resource"
  );
};
module.exports = {authorizeUser,authorizeAdmin};

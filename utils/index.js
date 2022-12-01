const {authorizeUser,authorizeAdmin} = require("./authorizeUser");
const { schoolTokenPayload, userTokenPayload } = require("./tokenPayloads");
const { isTokenValid, createJWT } = require("./jwt");
module.exports = {
  schoolTokenPayload,
  createJWT,
  isTokenValid,
  userTokenPayload,
  authorizeUser,
  authorizeAdmin
};

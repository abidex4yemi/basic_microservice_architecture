const jwt = require("jsonwebtoken");

/**
 * @description Generate token
 *
 * @param {*} user
 */
const generateToken = payload => {
  const { id } = payload;

  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "24h"
  });

  return token;
};

module.exports = generateToken;

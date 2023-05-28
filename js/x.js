const crypto = require("crypto");

function hashPassword(password) {
  const hash = crypto.createHash("sha256");
  hash.update(password);
  return hash.digest("hex");
}

const password = "Q123@123b";
const hashedPassword = hashPassword(password);

console.log(hashedPassword);

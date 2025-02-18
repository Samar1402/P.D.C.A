const bcrypt = require("bcryptjs");

async function hashPassword() {
  const plainPassword = "Pdca@789"; // 🔴 Your current password
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  console.log("Hashed Password:", hashedPassword);
}

hashPassword();

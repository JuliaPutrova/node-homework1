const contactPath = require("./contactPath");
const fs = require("fs").promises;

const updateContact = async (contact) => {
  await fs.writeFile(contactPath, JSON.stringify(contact, null, 2));
};

module.exports = updateContact;

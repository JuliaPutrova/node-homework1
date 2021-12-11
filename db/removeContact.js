const fs = require("fs").promises;
const listContacts = require("./listContacts");
const updateContact = require("./updateContact");

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, index) => index !== idx);
  await updateContact(newContacts);
  console.table(newContacts);
  console.log(contacts[idx]);
  return contacts[idx];
};

module.exports = removeContact;

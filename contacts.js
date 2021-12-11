const contactsOperations = require("./db/app");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      // console.log(contacts);
      break;
    case "get":
      const contactById = await contactsOperations.getContactById(id);
      // console.log(contactById);
      break;
    case "remove":
      const removeContact = await contactsOperations.removeContact(id);
      // console.log(removeContact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact({
        name,
        email,
        phone,
      });
      // console.log(newContact);
      break;

    default:
      console.log("Unknown command");
  }
};
// //
// invokeAction({ action: "list" });
// //
// const contactId = "10";
// invokeAction({ action: "get", id: contactId });
//
// const contactId = "9";
// invokeAction({ action: "remove", id: contactId });
//
// const newContact = {
//   name: "Marry",
//   email: "marry@mail.ru",
//   phone: 666,
// };
// invokeAction({ action: "add", ...newContact });

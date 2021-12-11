const contactsOperations = require("./db/app");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsOperations.listContacts();
      break;

    case "get":
      contactsOperations.getContactById(id);
      break;

    case "add":
      contactsOperations.addContact({ name, email, phone });
      break;

    case "remove":
      contactsOperations.removeContact(id);
      break;

    default:
      console.log("Unknown command");
  }
}

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);

invokeAction(argv);

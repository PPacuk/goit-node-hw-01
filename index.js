const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			const list = await listContacts();
			return console.log(list);

		case "get":
			const contactById = await getContactById(id);
			return console.log(contactById);

		case "add":
			const addContactToList = await addContact(name, email, phone);
			return console.log(addContactToList);

		case "remove":
			const updatedList = await removeContact(id);
			return console.log(updatedList);

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}

const contactsArray = hideBin(process.argv);
const { argv } = yargs(contactsArray);

invokeAction(argv);

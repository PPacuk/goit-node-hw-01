const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
} = require("./contacts");

// const contactsPath = path.join(__dirname, "/db", "contacts.json");

console.log('hello');
console.log(__dirname);
console.log(__filename);
 console.log('imported :', listContacts());


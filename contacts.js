const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "/db", "contacts.json");

// TODO: udokumentuj każdą funkcję

function listContacts() {
   return contactsPath;
}

function getContactById(contactId) {}

function removeContact(contactId) {}

function addContact(name, email, phone) {}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};

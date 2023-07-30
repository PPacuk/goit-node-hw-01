const fs = require("fs").promises;
const path = require("path");
const colors = require("colors");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "/db", "contacts.json");

async function listContacts() {
	const response = await fs.readFile(contactsPath);
	return JSON.parse(response);
}

async function getContactById(contactId) {
	const response = await listContacts();
	const contactById = response.find((contact) => contact.id === contactId);
	return contactById;
}

async function removeContact(contactId) {
	const response = await listContacts();
	const contactIndex = response.map((e) => e.id).indexOf(contactId);
	const updatedList = response.filter((e) => e.id !== `${contactId}`);
	if (contactIndex === -1) {
		console.log("Contact not found!".red);
	} else {
		await fs.writeFile(contactsPath, JSON.stringify(updatedList, null, 2));
		return updatedList;
	}
}

async function addContact(name, email, phone) {
	const response = await listContacts();
	const contact = {
		id: nanoid(),
		name,
		email,
		phone,
	};
	response.push(contact);
	await fs.writeFile(contactsPath, JSON.stringify(response, null, 2));
	return response;
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};

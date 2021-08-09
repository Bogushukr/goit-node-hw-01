const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, 'db/contacts.json');

function listContacts() {
  fs.readFile(contactsPath, 'utf8', function (error, data) {
    if (error) {
      throw error;
    }
    const contacts = JSON.parse(data);
    console.table(contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', function (error, data) {
    if (error) {
      throw error;
    }
    const contacts = JSON.parse(data);
    const contact = contacts.find(({ id }) => id === Number(contactId));
    console.table(contact);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf8', function (error, data) {
    if (error) {
      throw error;
    }
    const contacts = JSON.parse(data);
    const filteredContacts = contacts.filter(({ id }) => id !== Number(contactId));
    const beautifyContacts = JSON.stringify(filteredContacts, null, 4);

    fs.writeFile(contactsPath, beautifyContacts, function (error) {
      if (error) {
        throw error;
      }
      console.table(filteredContacts);
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf8', function (error, data) {
    if (error) {
      throw error;
    }
    const contacts = JSON.parse(data);
    const id = Math.max(...contacts.map(({ id }) => id)) + 1;
    const contact = { id, name, email, phone };
    const updatedContacts = [...contacts, contact];
    const newContacts = JSON.stringify(updatedContacts, null, 4);
    fs.writeFile(contactsPath, newContacts, function (error) {
      if (error) {
        throw error;
      }
      console.table(updatedContacts);
    });
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
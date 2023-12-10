import { program } from "commander";
import * as contactService from "./contacts.js";

async function invokeAction({ action, id, name, email, phone })  {
    switch(action) {
        case "list":
           const allContacts = await contactService.listContacts();
           return console.log(allContacts);
        case "get":
            const oneContact = await contactService.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contactService.addContact(name, email, phone);
            return console.log(newContact);
        case "remove":
            const deleteContact = await contactService.removeContact(id);
            return console.log(deleteContact);
    }
}

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-m, --email <type>")
    .option("-p, --phone <type>");

program.parse();
const argv = program.opts();
invokeAction(argv)
export async function getContacts() {
    let contacts = localStorage.getItem("contacts");
    return JSON.parse(contacts)
}
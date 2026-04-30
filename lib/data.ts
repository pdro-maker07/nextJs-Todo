import prisma from "./prisma";

export const getContacts = async () => {
    try {
        const contacts = await prisma.contact.findMany(); // Pastikan 'contact' huruf kecil
        return contacts;
    } catch (error) {
        throw new Error("Failed to fetch contact data");
    }
};
import { Contact } from "./dto/contact.model";
export declare class ContactsService {
    get(): Promise<Contact[]>;
    getById(id: string): Promise<Contact>;
    create(contact: Contact): Promise<Contact>;
    private mapResponse;
    private handleError;
}

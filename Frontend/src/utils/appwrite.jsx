import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('671a199f00102406107a'); 


    
export const account = new Account(client);
export { ID } from 'appwrite';

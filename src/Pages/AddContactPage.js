import React, { useState} from 'react'
// import api from '../api/contact'
import AddContact from '../Components/AddContact/AddContact';
import ContactsList from '../Components/ContactsList/ContactsList'
import { dataCard } from '../Components/ContactsList/data/dataCard';
import { v4 as uuidv4 } from 'uuid';


const AddContactPage = () => {


    const [contacts, setContacts] = useState(dataCard);
    // const [searchTerm, setSearchTerm] = useState(false);
    // const [searchResults, setSearchResults] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    // React.useEffect(()=>{
    //     contacts.map((contact) => {
    //         return contact.id === request.id ? { ...request } : contact;
    //     })
        
    //     return  console.log("was eidt")
    // }, [contacts])

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
        });
    
        setContacts(newContactList);
    };
    
    // Add contact
    const addContactHandler = (contact) => {
        const request = {
            id: uuidv4(),
            ...contact,
        };
        // const response = await api.post("/contacts", request);
        console.log(request);
        setContacts([...contacts, request]);
        };

    // Edit contact
        const editContactHandler = (contact) => {
            const request = {...contact}
            console.log(request,  "hi")
            
            setContacts(
                contacts.map((contact) => {
                    return contact.id === request.id ? { ...request } : contact;
                })
                );

            
            }
            // console.log(contacts)

    
    console.log(isOpen)
    return (
        <>
            {isOpen ? <AddContact addContactHandler={addContactHandler} /> : ''}
            <ContactsList removeContactHandler={removeContactHandler} editContactHandler={editContactHandler} contacts={contacts} isOpen={isOpen} Toggle={()=>setIsOpen(!isOpen)}/>
        </>
    )
}



export default AddContactPage

import { useEffect, useState } from 'react';
import ContactCard from '../ContactCard';
import './styles.css';
import axios from 'axios';

function ContactList({contacts, setContacts, setContactDetails}){

    const [contact_id, setContactID] = useState(0);
    const handleDelete = async (contact_id) => {
        const response = await axios.post('http://127.0.0.1:8000/api/v0.0.1/contacts/delete', {id:contact_id});
        if(response.data.status){
            const updatedContactList = contacts.filter((contact)=>(contact.id !== contact_id));
            setContacts(updatedContactList);
        }
    }

    useEffect(()=>{
        if(contact_id)
            handleDelete(contact_id);
    },[contact_id]);

    return(
        <div>
            {contacts.map(
                (contact)=>(
                    <ContactCard 
                        contact={contact}
                        key={contact.id} id={contact.id} name={contact.name} 
                        phone={contact.phone_number}
                        city={contact.city}
                        country={contact.country}
                        lat={contact.latitude} 
                        lng={contact.longtitude} 
                        setContactID={setContactID}
                        setContactDetails = {setContactDetails}
                    />
                )
            )}
        </div>
    );
}

export default ContactList;
import ContactCard from '../ContactCard';
import './styles.css';

function ContactList({contacts}){

    return(
        <div>
            {contacts.map(
                (contact)=>(
                    <ContactCard 
                        key={contact.id} name={contact.name} 
                        phone={contact.phone_number}
                        city={contact.city}
                        country={contact.country}
                        lat={contact.latitude} 
                        lng={contact.longtitude} 
                    />
                )
            )}
        </div>
    );
}

export default ContactList;
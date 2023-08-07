import './styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faLocationPin, faTrash} from '@fortawesome/free-solid-svg-icons';


function ContactCard({id, name, phone, city, country, lat, lng, setContactID, setContactDetails}) {

    const handleContactDetails = () => {
        const contact_obj = {
            name: name,
            phone: phone,
            city: city,
            country: country,
            latitude: lat,
            longtitude: lng
        }

        setContactDetails(contact_obj);
    }
    return(
        <div className='contact-card flex d-column'>
            <div className='flex d-row g-4'>
                <h4>Name:</h4>
                <span>{name}</span>
            </div>
            <div className='flex d-row g-4'>
                <h4>Phone:</h4>
                <span>{phone}</span>
            </div>
            <div className='flex d-row g-4'>
                <h4>Address:</h4>
                <span>{city}, {country}</span>
            </div>
            <div className='flex d-row g-4'>
                <h4>Location:</h4>
                <span>(lat: {lat}, lng: {lng})</span>
            </div>
            <div className="controls flex d-row rh-flex-end g-4">
                <button onClick={handleContactDetails}><FontAwesomeIcon icon={faLocationPin}/> Locate</button>
                <button><FontAwesomeIcon icon={faEdit}/> Edit</button>
                <button onClick={()=>setContactID(id)}><FontAwesomeIcon icon={faTrash}/> Delete</button>
            </div>
        </div>
    );
}

export default ContactCard;
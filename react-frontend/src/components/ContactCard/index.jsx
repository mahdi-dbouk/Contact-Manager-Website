import './styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faLocationPin, faTrash} from '@fortawesome/free-solid-svg-icons';


function ContactCard() {
    return(
        <div className='contact-card flex d-column'>
            <div className='flex d-row g-4'>
                <h4>Name:</h4>
                <span>John doe</span>
            </div>
            <div className='flex d-row g-4'>
                <h4>Phone:</h4>
                <span>00961-76-036104</span>
            </div>
            <div className='flex d-row g-4'>
                <h4>Location:</h4>
                <span>(lat: 33.333333, lng: 33.333333)</span>
            </div>
            <div className="controls flex d-row rh-flex-end g-4">
                <button><FontAwesomeIcon icon={faLocationPin}/> Locate</button>
                <button><FontAwesomeIcon icon={faEdit}/> Edit</button>
                <button><FontAwesomeIcon icon={faTrash}/> Delete</button>
            </div>
        </div>
    );
}

export default ContactCard;
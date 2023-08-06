import './styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function AddCard() {

    const [is_displayed, setDisplay] = useState(false);

    const handleClick = (event) =>{
        setDisplay(current => !current);
    }
    return(
        <div>

            {!is_displayed &&
                <button className='add-btn' onClick={handleClick}><FontAwesomeIcon icon={faAdd}/></button>
            }
            { is_displayed &&
            <div className='contact-card flex d-column'>
            <div className='flex d-row g-4'>
                <h4>Name:</h4>
                <input type="text" />
            </div>
            <div className='flex d-row g-4'>
                <h4>Phone:</h4>
                <input type="text" />
            </div>
            <div className='flex d-row g-4'>
                <h4>Location:</h4>
                <span>(lat: <input type="text" />, lng: <input type='text' />)</span>
            </div>
            <div className="controls flex d-row rh-flex-end g-4">
                <button onClick={handleClick}><FontAwesomeIcon icon={faAdd}/> Create</button>
            </div>
        </div>
        }

        </div>
    );
}

export default AddCard;
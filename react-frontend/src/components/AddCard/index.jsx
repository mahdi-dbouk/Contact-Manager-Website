import './styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';


function AddCard({contacts, setContacts}) {
    const [input, setInput] = useState({
        name: "",
        phone: "",
        city: "",
        country: "",
        latitude: "",
        longtitude: ""
    });

    const handleValueChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const [is_displayed, setDisplay] = useState(false);

    const handleAddBtn = () => {
        setDisplay(true);
    }
    const handleClick = async (e) =>{
        if(is_displayed === true){
            try{
                const response = await axios.post("http://127.0.0.1:8000/api/v0.0.1/contacts/create", input)
                setContacts((contacts)=>[...contacts, response.data.contact])
                console.log(input)
              setInput({
                    name: "",
                    phone: "",
                    city: "",
                    country: "",
                    latitude: "",
                    longtitude: ""
                });
              }catch(e){
                console.log(e)
              }
        }
        setDisplay(false);

    }


    return(
        <div>

            {!is_displayed &&
                <button className='add-btn' onClick={handleAddBtn}><FontAwesomeIcon icon={faAdd}/></button>
            }
            { is_displayed &&
            <div className='contact-card flex d-column'>
            <div className='flex d-row g-4'>
                <h4>Name:</h4>
                <input  type="text" name='name' defaultValue={input.name} value={input.name} onChange={handleValueChange} />
            </div>
            <div className='flex d-row g-4'>
                <h4>Phone:</h4>
                <input name='phone' type="text" defaultValue={input.phone} value={input.phone} onChange={handleValueChange} />
            </div>
            <div className='flex d-row g-4'>
                <h4>City:</h4>
                <input name='city' type="text" defaultValue={input.city} value={input.city} onChange={handleValueChange}/>
            </div>
            <div className='flex d-row g-4'>
                <h4>Country:</h4>
                <input name='country' type="text" defaultValue={input.country} value={input.city} onChange={handleValueChange}/>
            </div>
            <div className='flex d-row g-4'>
                <h4>Location:</h4>
                <span>(lat: <input name='latitude' type="text" defaultValue={input.latitude} value={input.latitude} onChange={handleValueChange}/>, lng: <input name='longtitude' type='text' defaultValue={input.longtitude} value={input.longtitude} onChange={handleValueChange}/>)</span>
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
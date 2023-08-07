import { useState,useEffect } from 'react';
import { useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import axios from 'axios';
import WebFont from 'webfontloader';
import './App.css';
import AddCard from './components/AddCard';
import ContactList from './components/ContactList';
import ContactCard from './components/ContactCard';


function ChangeLocation({lat, long}){
  const map = useMap();
  map.flyTo([lat,long], 14);
  return null;
}

function App() {
  //webfonts loader
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Open Sans']
      }
    });
  });

  const [contact_details, setContactDetails] = useState({
    name: '',
    phone: '',
    city: '',
    country: '',
    latitude: '',
    longtitude: '',
});

  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/v0.0.1/contacts');
      setContacts([...response.data.contacts]);
  }

  useEffect(()=>{
      fetchContacts();
  }, []);


  return (
    <div>
      <header className='flex d-row rv-center rh-center'>
        <h1>Contacts App</h1>
      </header>
      <div className="main flex d-row">
        <div className="aside flex d-column">
          <AddCard setContacts={setContacts}/>
          <ContactList contacts={contacts} setContacts={setContacts} setContactDetails={setContactDetails}/>

        </div>
        <div className="map-container">
          <MapContainer center={[51.5,-0.9]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {contact_details.latitude&& contact_details.longtitude &&
            <>
            <ChangeLocation lat={parseFloat(contact_details.latitude)} long={parseFloat(contact_details.longtitude)} />
            <Marker position={[parseFloat(contact_details.latitude),parseFloat(contact_details.longtitude)]}>
            <Popup>
              <ContactCard 
                name={contact_details.name}
                phone={contact_details.phone}
                city={contact_details.city}
                country={contact_details.country}
                lat={contact_details.latitude}
                lng={contact_details.longtitude}
              />
            </Popup>
          </Marker>
          </>
            }
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default App;

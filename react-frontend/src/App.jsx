import { useState,useEffect } from 'react';
import axios from 'axios';
import WebFont from 'webfontloader';
import './App.css';
import AddCard from './components/AddCard';
import ContactList from './components/ContactList';

function App() {

  //webfonts loader
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Open Sans']
      }
    });
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
          <ContactList contacts={contacts}/>
          <AddCard setContacts={setContacts}/>

        </div>
        <div className="map-container">

        </div>
      </div>
    </div>
  );
}

export default App;

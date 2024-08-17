import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';

function Home() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  const handleSave = (contact) => {
    if (currentContact) {
      setContacts(contacts.map(c => c.id === contact.id ? contact : c));
    } else {
      setContacts([...contacts, contact]);
    }
    setCurrentContact(null);
  };

  const handleEdit = (contact) => {
    setCurrentContact(contact);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
      setContacts(contacts.filter(c => c.id !== id));
    }
  };

  const handleCancel = () => {
    setCurrentContact(null);
  };

  return (
    <div>
      <ContactList contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
      <ContactForm contact={currentContact} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}

export default Home;

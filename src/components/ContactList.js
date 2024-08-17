import React from 'react';

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div>
      <h2>Contactos</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
            <button onClick={() => onEdit(contact)}>Editar</button>
            <button onClick={() => onDelete(contact.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

import React, { useState, useEffect } from 'react';

function ContactForm({ contact, onSave, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: contact ? contact.id : Date.now(), name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{contact ? 'Editar Contacto' : 'Agregar Contacto'}</h2>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default ContactForm;

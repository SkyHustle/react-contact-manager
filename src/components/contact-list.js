import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './contact-card';
import PropTypes from 'prop-types';

export default function ContactList({contacts}){

  const cards = () => {
    return contacts.map(contact => {
      return (
        <ContactCard key={contact._id} contact={contact}/>
      )
    })
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
}
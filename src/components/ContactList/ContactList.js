import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem/ListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          number={number}
          name={name}
          onClick={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

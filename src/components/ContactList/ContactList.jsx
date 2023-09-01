import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = ({ contactList, handleDelete }) => {
  return (
    <ul className={css.contactList}>
      {contactList.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;

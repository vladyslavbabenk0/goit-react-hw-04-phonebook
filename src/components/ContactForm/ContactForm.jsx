import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const inputHandleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={inputHandleChange}
          placeholder="Michael Jordan"
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          pattern="[0-9]*"
          required
          onChange={inputHandleChange}
          placeholder="+380 000 000 000"
        />
      </label>
      <button type="submit" className={css.addContactBtn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

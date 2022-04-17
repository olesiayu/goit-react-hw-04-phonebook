import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
  name: '',
  number: ''
    }
    
    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }
  
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
  <label htmlFor={this.nameInputId}>Name
          <input
        className={s.input}
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        id={this.nameInputId}
  
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
  </label>
  <label htmlFor={this.numberInputId}>Number
      <input
        className={s.input}
        type="tel"
        name="number"
        value={this.state.number}
        onChange={this.handleChange}
        id={this.numberInputId}
            
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
  </label>
      <button className={s.button} type="submit">Add contact</button>
</form>      
    )
  }
};


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
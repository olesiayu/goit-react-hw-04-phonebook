import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';


export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}
  
  formSubmitHandler = ({name, number}) => {
    const { contacts } = this.state;
    const sameName =
      contacts.some((contacts) =>
        contacts.name.toLocaleLowerCase() === name.toLowerCase());

    const contact = {
      id: nanoid(),
      name,
      number,
    }

    if (sameName) {
      alert(`${name} is already in contacts`);
      return;
    }
    
    this.setState(({ contacts }) => ({      
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

  }
  
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
<div className={s.container}>
  <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>

  <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
  <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
</div>      
    )
  }
};

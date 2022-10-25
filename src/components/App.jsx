import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Title } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class App extends Component {
    state = {
        filter: '',
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    };

    formSubmitHemdler = contact => {
        contact.id = nanoid();
        const names = this.state.contacts.map(item => item.name)  
        
       if (names.includes(contact.name)) {
      return Notify.warning(`${contact.name} is already in contacts`, {
        position: 'center-top',
      });
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

    };

    handlerChangeFilter = evt => {
        const { name, value } = evt.currentTarget;

        this.setState({ [name]: value.toLowerCase() });
    };

    filterContacts = () => {
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter));
       
    };

    deleteContact = contactId => {
        this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== contactId) });
    };

    render() {
        const filterContacts = this.filterContacts();

        return (
            <Container>
                <Title> Phonebook </Title>

                <ContactForm onSubmit={this.formSubmitHemdler} />
                <Title>Contacts</Title>
                <Filter onChange={this.handlerChangeFilter} />
                <ContactList contacts={filterContacts} onClick={this.deleteContact} />
            </Container>
        );
    }
}

export default App;

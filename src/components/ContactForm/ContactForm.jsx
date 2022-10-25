import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Label, Button } from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    handlerChange = evt => {
       this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });

    };

    handlerSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <Form onSubmit={this.handlerSubmit}>
                <Label>
                    Name :
                <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handlerChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </Label>
                <Label>
                    Number : 
                <Input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handlerChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        );
    }
}



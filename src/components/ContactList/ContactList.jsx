import PropTypes from 'prop-types';
import { List, ListItem, Button } from './ContactList.styled';

export function ContactList({ contacts, onClick }) {
    return (
        <List>
            {contacts.map(contact => (
                <ListItem key={contact.id}>
                    {contact.name}: {contact.number}
                    <Button type="button" onClick={() => onClick(contact.id)}>
                        Delete
                    </Button>
                </ListItem>
            ))}
        </List>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
};

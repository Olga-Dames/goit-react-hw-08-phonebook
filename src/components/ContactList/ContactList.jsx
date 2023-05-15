import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
};

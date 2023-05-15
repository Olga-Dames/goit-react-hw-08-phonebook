import { useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Container, Heading, Title, Empty, Main, Contacts } from '../components/App.styled';
import {
  selectContacts,
  selectError,
} from 'redux/contacts/selectors';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  return (
    <Main>
      <Container>
        <Heading>Phonebook</Heading>
        <ContactForm />
        <Filter />
        </Container>
        <Contacts>
        <Title>Contacts</Title>
        {error && <p>{error}</p>}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Empty>Your phonebook is empty</Empty>
        )}
        </Contacts>
    </Main>
  );
}

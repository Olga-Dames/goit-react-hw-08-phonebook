import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import {
  Container,
  Heading,
  Title,
  Empty,
  Main,
  Contacts,
} from '../components/App.styled';
import { selectContacts, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
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

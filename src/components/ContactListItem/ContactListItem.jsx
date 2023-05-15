import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { RotatingLoader } from 'components/Loader/Loader';
import { Contact, Button, ListItemShadow, ContactItem } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
// import { updateContact } from 'redux/contacts/operations';
import { BsTrash3 } from 'react-icons/bs';
import { ImUser } from 'react-icons/im';
import { MdPhoneInTalk } from 'react-icons/md';

export const ContactListItem = ({ name, number, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleDelete = e => {
    dispatch(deleteContact(id));
  };

  // const handleUpdate = e => [
  //   dispatch(updateContact(id))
  // ]

  return (
    <ListItemShadow
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Contact>
        <ContactItem>
          <ImUser size={25}/> {name}
        </ContactItem>
        <ContactItem>
          <MdPhoneInTalk size={25}/> 
          {number}
        </ContactItem>
      </Contact>
      {/* <Button type="button" onClick={handleUpdate}>
        Edit
      </Button> */}
      {isHovered && (
        <Button type="button" onClick={handleDelete}>
          <BsTrash3 size={25} color='#827081'/>
        </Button>
      )}
    </ListItemShadow>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

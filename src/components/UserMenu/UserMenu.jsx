import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';
import { IoIosLogOut } from 'react-icons/io';
import { Logout, LogoutBox } from './UserMenu.styled';

export default function UserMenu() {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <LogoutBox>
      Welcome, {name}
      <Logout type="button" onClick={handleLogout}>
        <IoIosLogOut size={30} color="#634488" />
      </Logout>
    </LogoutBox>
  );
}

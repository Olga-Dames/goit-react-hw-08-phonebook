import AuthNav from 'components/AuthNav/AuthNav'
import Navigation from 'components/Navigation/Navigation'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'
import { Loader } from '../Loader/Loader';
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from 'redux/auth/selectors'
import { Bar } from './AppBar.styled'
import {
  selectIsLoading,
} from 'redux/contacts/selectors';

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isLoading = useSelector(selectIsLoading);
  return (
    <Bar>
        <Navigation/>
        {isLoading && <Loader />}
       { isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </Bar>
  )
}

export default AppBar
import React from 'react'
import { NavBox, NavPage } from './Navigation.styled'

export default function Navigation() {
  return (
    <NavBox>
        <NavPage to='/'>Homepage</NavPage>
        <NavPage to='/contacts'>Contacts</NavPage>
    </NavBox>
  )
}

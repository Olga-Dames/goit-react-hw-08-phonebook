import React from 'react';
import { AuthBox, AuthPage } from './AuthNav.styled';

export default function AuthMenu() {
  return (
    <AuthBox>
      <AuthPage to="/login">Log in</AuthPage>
      <AuthPage to="/register">Register</AuthPage>
    </AuthBox>
  );
}

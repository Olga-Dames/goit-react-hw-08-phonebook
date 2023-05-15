import { LogInForm, Label, LoginInput, Wrapper, LoginButton, LoginTitle } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { MdEmail, MdPassword } from 'react-icons/md';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleLoginSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <LoginTitle>User Login</LoginTitle>
      <LogInForm onSubmit={handleLoginSubmit}>
        <Wrapper>
          <Label>
            <MdEmail size={25} color='#827081' />
          </Label>
          <LoginInput type="email" name="email" placeholder="Email" required />
        </Wrapper>
        <Wrapper>
          <Label>
            <MdPassword size={25} color='#827081'/>
          </Label>
          <LoginInput
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Wrapper>
        <LoginButton type="submit">Log in</LoginButton>
      </LogInForm>
    </>
  );
}

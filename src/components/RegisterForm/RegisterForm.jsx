import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegisterButton,
  RegisterInput,
  RegisterWrapper,
  RegisterLabel,
  RegForm,
  RegisterTitle,
} from './RegisterForm.styled';
import { MdEmail, MdPassword, MdOutlinePerson } from 'react-icons/md';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleRegisterSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <RegisterTitle>Registration</RegisterTitle>
      <RegForm onSubmit={handleRegisterSubmit}>
        <RegisterWrapper>
          <RegisterLabel>
            <MdOutlinePerson size={25} color="#827081" />
          </RegisterLabel>
          <RegisterInput type="text" name="name" placeholder="Name" required />
        </RegisterWrapper>
        <RegisterWrapper>
          <RegisterLabel>
            <MdEmail size={25} color="#827081" />
          </RegisterLabel>
          <RegisterInput
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </RegisterWrapper>
        <RegisterWrapper>
          <RegisterLabel>
            <MdPassword size={25} color="#827081" />
          </RegisterLabel>
          <RegisterInput
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </RegisterWrapper>
        <RegisterButton type="submit">Register</RegisterButton>
      </RegForm>
    </>
  );
}

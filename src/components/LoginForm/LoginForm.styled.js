import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Waves = keyframes`
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg)
}

`;

export const LogInForm = styled.form`
  overflow: hidden;
  margin: 0 auto;
  background-color: #cda2cb;
  padding: 60px 30px 60px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: absolute;
  top: 45%;
  left: 60%;
  width: 300px;
  border: 2px solid #827081;
  transform: translate(-50%, -50%);
  transition: transform 300ms, box-shadow 300ms;
  box-shadow: 5px 10px 10px rgba(2, 128, 144, 0.2);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;
    z-index: -1;
  }

  &::before {
    left: 30%;
    bottom: -100%;
    background-color: rgba(69, 105, 144, 0.15);
    animation: ${Waves} 6s infinite;
  }

  &::after {
    left: 25%;
    bottom: -95%;
    background-color: rgba(2, 128, 144, 0.2);
    animation: ${Waves} 7s infinite;
  }
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  top: 5px;
  left: 5px;
`;

export const Wrapper = styled.label`
  position: relative;
`;

export const LoginInput = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;
  width: 80%;
  border-radius: 4px;
  padding: 10px 18px 10px 40px;
  border: 1px solid #827081;
  background-color: #f1e4f0;
  outline: transparent;
  color: #827081;
`;

const Explode = keyframes`
0% {
  transform: scale(0);
}
25% {
  transform: scale(1.5);
  opacity: 1;
}
100% {
  transform: scale(50);
  opacity: 0;
}
`;

export const LoginButton = styled.button`
  width: 90px;
  position: relative;
  left: 35%;
  border-radius: 5px;
  padding: 10px 15px;
  border: 1px solid #827081;
  background-color: #f1e4f0;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  color: #827081;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
    transform: scale(0);
  }

  &:hover:after {
    animation: ${Explode} 0.5s ease-out;
  }
`;

export const LoginTitle = styled.h2`
position: absolute;
bottom: 300px;
left: 45px;
margin-bottom: 15px;
font-size: 82px;
font-style: italic;
font-weight: bold;
color: #827081;
transform: rotate(-90deg);
`;

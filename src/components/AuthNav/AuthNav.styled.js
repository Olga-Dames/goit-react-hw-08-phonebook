import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 15px;
`;

export const AuthPage = styled(NavLink)`
  position: relative;
  list-style-type: none;
  z-index: 10;
  text-align: center;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  color: #827081;
  text-decoration: none;


  &:hover {
    color: red;
  }

  &.active {
    
  }
`;

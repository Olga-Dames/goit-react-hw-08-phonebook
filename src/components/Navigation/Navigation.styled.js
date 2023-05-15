import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const NavPage = styled(NavLink)`
  position: relative;
  list-style-type: none;
  z-index: 10;
  text-align: center;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  color: #827081;
  text-decoration: none;
  padding-bottom: 5px;

  &,
  &:after,
  &:before {
    transition: all 0.5s;
  }

  &:hover {
    color: #fff;
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: #fff;
    height: 2px;
  }
  &:hover:after {
    width: 100%;
  }
`;

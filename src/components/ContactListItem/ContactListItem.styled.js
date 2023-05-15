import styled from '@emotion/styled';

export const Contact = styled.ul`
  font-size: 20px;
  color: #827081;
  font-style: italic;
  padding: 0;
  display: flex;
  gap: 20px;
`;

export const ContactItem = styled.li`
  padding-bottom: 5px;
  min-width: 200px;
  font-size: 24px;
  color: #827081;
  font-style: italic;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  border-bottom: 1px solid #827081;
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 570px;
  height: 40px;
  position: relative;
  border-radius: 5px;
  background: linear-gradient(to right, #f5b2d4 35%, #f1e4f0 100%);
  margin-bottom: 25px;
  padding: 10px 0px 10px 50px;
  color: darkslategray;
  box-shadow: 1px 2px 1px -1px #777;
  transition: background 200ms ease-in-out;

  &:hover {
    background: linear-gradient(to right, #f5b2d4 0%, #f5b2d4 100%);
  }
`;

export const ListItemShadow = styled(ListItem)`
  position: relative;

  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    bottom: 13px;
    right: 7px;
    width: 25%;
    top: 0;
    box-shadow: 0 15px 10px #777;
    transform: rotate(4deg);
    transition: all 150ms ease-in-out;
  }

  &::after {
    position: absolute;
    content: '';
    top: 20px;
    left: 15px;
    border-radius: 50%;
    box-shadow: inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5),
      inset 0 0 0 25px #f1e4f0;
    width: 20px;
    height: 20px;
    display: inline-block;
  }

  &:hover::before {
    transform: rotate(0deg);
    bottom: 20px;
    z-index: -10;
  }
`;

export const Button = styled.button`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  border-radius: 20px;
  border: none;
  width: 60px;
  height: 40px;
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  // background: linear-gradient(45deg, #827081, #cda2cb);
  background: transparent;
`;

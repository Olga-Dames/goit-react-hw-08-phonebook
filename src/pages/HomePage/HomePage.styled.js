import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 350px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  background-image: url('https://wallpaperaccess.com/full/632782.jpg');
  background-size: cover;
  background-position: 50% 100%;
  height: 100vh;
  top: -80px;
`;

export const Heading = styled.h2`
  position: absolute;
  bottom: 300px;
  left: -100px;
  margin-bottom: 15px;
  font-size: 82px;
  font-style: italic;
  font-weight: bold;
  color: #827081;
  transform: rotate(-90deg);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background-color: #827081; 
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  position: absolute;
  bottom: 200px;
  left: 100px;
  text-align: center;
  font-size: 48px;
  font-style: italic;
  font-weight: bold;
  color: #827081;
  transform: rotate(-90deg);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background-color: #827081; 
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

export const Phrase = styled.h2`
  width: 600px;
  padding: 60px;
  text-align: center;
  font-size: 64px;
  font-style: italic;
  font-weight: bold;
  color: #f1e4f0;
  background-color: #f5b2d4;
  border-radius: 10px;
`;

export const Box = styled.div`
  perspective: 1000px;
  position: absolute;
  width: 900px;
  margin: 0 100px;
  bottom: 15%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 60px;
  // text-align: center;
  // font-size: 64px;
  // font-style: italic;
  // font-weight: bold;
  // color: #827081;
  border: 2px solid #827081;
  border-radius: 10px;
`;



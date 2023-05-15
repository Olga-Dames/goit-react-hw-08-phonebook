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
`;

export const Phrase = styled.h2`
  position: absolute;
  width: 600px;
  bottom: 20%;
  right: 15%;
  padding: 60px;
  text-align: center;
  font-size: 64px;
  font-style: italic;
  font-weight: bold;
  color: #827081;
  border: 2px solid #827081;
  border-radius: 10px;
`;


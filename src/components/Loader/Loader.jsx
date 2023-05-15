import { ThreeDots, RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots 
    height="30" 
    width="50" 
    radius="9"
    color="#827081" 
    ariaLabel="three-dots-loading"
    visible={true}
     />
  )
};

export const RotatingLoader = () => {
  return (
    <RotatingLines
    strokeColor="white"
    strokeWidth="5"
    animationDuration="0.75"
    width="25"
    visible={true}
  />
  );
};
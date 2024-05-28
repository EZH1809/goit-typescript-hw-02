import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <ThreeDots
      visible={true}
      height="40"
      width="40"
      color="blue"
      radius="5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.container}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
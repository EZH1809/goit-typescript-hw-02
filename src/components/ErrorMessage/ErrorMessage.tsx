import React from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.errorMessage}>
      Щось пішло не так!
      <br />А ну-ка перезавантаж сторінку ще разок!
    </p>
  );
};

export default ErrorMessage;

import FeatherIcon from 'feather-icons-react';

import styles from './styles.module.css';

const ErrorBox = ({ title, message, className }) => (
  <div className={`${styles.container} ${className}`}>
    <FeatherIcon icon="alert-circle" />

    <h1>{title}</h1>

    <small>{message}</small>
  </div>
);

export default ErrorBox;

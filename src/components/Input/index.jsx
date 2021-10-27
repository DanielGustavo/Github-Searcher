import FeatherIcon from 'feather-icons-react';

import styles from './styles.module.css';

const Input = ({ className, buttonIcon, ...rest }) => (
  <div
    className={`${
      buttonIcon ? styles.input : styles.inputFullBoarded
    } ${className}`}
  >
    <input {...rest} />

    {buttonIcon && (
      <button>
        <FeatherIcon icon={buttonIcon} />
      </button>
    )}
  </div>
);

export default Input;

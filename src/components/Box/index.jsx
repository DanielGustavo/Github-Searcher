import styles from './styles.module.css';

const Box = ({ children, className }) => (
  <div className={`${styles.container} ${className}`}>
    {children}
  </div>
)

export default Box;

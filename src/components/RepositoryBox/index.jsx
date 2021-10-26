import FeatherIcon from 'feather-icons-react';

import Box from '../Box';

import styles from './styles.module.css';

const RepositoryBox = ({ title, description, stars, forks, className }) => (
  <Box className={`${styles.container} ${className}`}>
    <div className={styles.repositoryDatas}>
      <h2>{title}</h2>

      <small className={styles.description}>{description}</small>
    </div>

    <div className={styles.repositoryMetadatas}>
      <span>
        <FeatherIcon size={20} className={styles.starIcon} icon="star" />
        <small>{stars}</small>
      </span>

      <span>
        <FeatherIcon size={20} icon="git-branch" />
        <small>{forks}</small>
      </span>
    </div>
  </Box>
);

export default RepositoryBox;

import FeatherIcon from 'feather-icons-react';

import Box from '../Box';

import styles from './styles.module.css';

const PublicRepositoriesBox = ({ repositoriesCount, className }) => (
  <Box className={`${styles.container} ${className}`}>
    <h2>Public Repositories</h2>

    <div className={styles.folderIconContainer}>
      <FeatherIcon className={styles.folderSvg} icon="folder" />
      <span>{repositoriesCount}</span>
    </div>
  </Box>
);

export default PublicRepositoriesBox;

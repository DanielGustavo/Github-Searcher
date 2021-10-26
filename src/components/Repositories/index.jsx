import RepositoryBox from '../RepositoryBox';

import styles from './styles.module.css';

const Repositories = ({ repositories = [] }) => (
  <div className={styles.container}>
    {repositories.map((repository) => (
      <RepositoryBox
        className={styles.repositoryBox}
        title={repository.name}
        description={repository.description}
        stars={repository.stargazers_count}
        forks={repository.forks_count}
        key={repository.id}
      />
    ))}
  </div>
)

export default Repositories;

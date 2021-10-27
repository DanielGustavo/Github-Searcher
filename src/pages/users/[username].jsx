import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';

import {
  getUserFromUsername,
  getRepositoriesFromUsername,
  getStarsFromUsername,
} from '../../services/githubService';

import User from '../../components/User';
import PublicRepositoriesBox from '../../components/PublicRepositoriesBox';
import Header from '../../components/Header';
import Repositories from '../../components/Repositories';
import ErrorBox from '../../components/ErrorBox';

import HttpError from '../../errors/HttpError';

import styles from '../../styles/users.module.css';

const UsernamePage = ({ user, repositories, error }) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <ReactLoading
        type="spin"
        color="var(--primary-color)"
        className="center"
      />
    );
  }

  return (
    <>
      <Header />

      {error !== undefined
        ? (
          <div className="container">
            <ErrorBox
              title="Something went wrong 😕"
              message={error}
              className={styles.errorBox}
            />
          </div>
        )
        : (
          <div className="container">
            <div className={styles.userDatas}>
              <User {...user} className={styles.user} />

              <span className={styles.separator}></span>

              <PublicRepositoriesBox
                className={styles.publicReposBox}
                repositoriesCount={user.public_repos}
              />
            </div>

            <Repositories repositories={repositories} />
          </div>
        )
      }
    </>
  );
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const user = await getUserFromUsername(params.username);
    const repositories = await getRepositoriesFromUsername(params.username);
    const stars = await getStarsFromUsername(params.username)

    return {
      props: { user: { ...user, stars }, repositories },
      revalidate: 60 * 5,
    };
  } catch (error) {
    let errorMessage = `It was not possible to fetch ${params.username}'s datas`;

    if (error instanceof HttpError) {
      errorMessage = error.message;
    }

    return {
      props: { error: errorMessage },
      revalidate: 30,
    }
  }
}

export default UsernamePage;

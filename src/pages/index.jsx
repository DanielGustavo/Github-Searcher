import Router from 'next/router';
import Image from 'next/image';

import Logo from '../assets/images/Logo.png';

import Input from '../components/Input';

import styles from '../styles/home.module.css';

const HomePage = () => {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const { username: { value: username } } = form;

    Router.push(`/users/${username}`);
  }

  return (
    <div className={`${styles.container} container`}>
      <Image src={Logo} alt="Github Searcher" width={303} height={148} />

      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <Input
          className={styles.input}
          buttonIcon="search"
          name="username"
          placeholder="Insert a username"
        />
        <button className={styles.button}>Search</button>
      </form>
    </div>
  );
};

export default HomePage;

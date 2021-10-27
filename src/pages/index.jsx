import { useState } from 'react';
import Router from 'next/router';
import ReactLoading from 'react-loading';

import Input from '../components/Input';

import styles from '../styles/home.module.css';

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    const form = event.target;
    const { username: usernameInput } = form;

    const username = usernameInput.value;

    if (username) {
      Router.push(`/users/${username}`);
    } else {
      setLoading(false);
    }

    usernameInput.blur();
  }

  return (
    <div className={`${styles.container} container`}>
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <Input
          className={styles.input}
          buttonIcon="search"
          name="username"
          placeholder="Insert a username"
        />
        <button className={styles.button}>Search</button>
      </form>

      {loading && <ReactLoading type="spin" color="var(--primary-color)" />}
    </div>
  );
};

export default HomePage;

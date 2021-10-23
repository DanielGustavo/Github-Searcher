import Image from 'next/image'

import Logo from '../assets/images/Logo.png';

import Input from '../components/Input';

import styles from '../styles/home.module.css';

const HomePage = () => (
  <div className={`${styles.container} container`}>
    <Image src={Logo} alt="Github Searcher" width={303} height={148} />

    <div className={styles.inputContainer}>
      <Input className={styles.input} buttonIcon="search" />
      <button className={styles.button}>Search</button>
    </div>
  </div>
)

export default HomePage

import Link from 'next/link';
import Image from 'next/image';
import FeatherIcon from 'feather-icons-react';

import Logo from '../../assets/images/Logo.png';

import styles from './styles.module.css';

const Header = () => (
  <header className={`${styles.container} container`}>
    <Link href="/" passHref>
      <span>
        <FeatherIcon className="pointer" icon="arrow-left" />
      </span>
    </Link>

    <Link href="/" passHref>
      <span>
        <Image
          className="pointer"
          src={Logo}
          alt="Github Searcher"
          width={143}
          height={70}
        />
      </span>
    </Link>
  </header>
);

export default Header;

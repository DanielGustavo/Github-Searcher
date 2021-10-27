import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import FeatherIcon from 'feather-icons-react';

import Logo from '../../assets/images/Logo.png';

import styles from './styles.module.css';

const Header = () => {
  const { pathname } = useRouter();

  const [onlyLogo, setOnlyLogo] = useState(pathname === '/');

  useEffect(() => {
    setOnlyLogo(pathname === '/');
  }, [pathname, setOnlyLogo]);

  return (
    <header
      className={`${styles.container} ${onlyLogo && styles.onlyLogo} container`}
    >
      {onlyLogo || (
        <Link href="/" passHref>
          <span>
            <FeatherIcon className="pointer" icon="arrow-left" />
          </span>
        </Link>
      )}

      <Link href="/" passHref>
        <span>
          <Image className="pointer" src={Logo} alt="Github Searcher" />
        </span>
      </Link>
    </header>
  );
};

export default Header;

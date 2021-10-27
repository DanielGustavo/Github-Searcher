import Image from 'next/image';
import FeatherIcon from 'feather-icons-react';

import styles from './styles.module.css';

const User = ({
  login,
  name,
  avatar_url,
  location,
  company,
  followers,
  className,
  stars,
  html_url,
}) => (
  <div className={`${styles.container} ${className}`}>
    <Image
      src={avatar_url}
      alt={name}
      width={203}
      height={203}
      layout="fixed"
    />

    <div className={styles.userDatas}>
      <div>
        <h1>
          <a href={html_url} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h1>
        <small>{login}</small>
      </div>

      <div className={styles.userMetadatas}>
        <div>
          <span>
            <FeatherIcon icon="map-pin" size={20} />
            <small>{location || '???'}</small>
          </span>

          <span>
            <FeatherIcon icon="briefcase" size={20} />
            <small>{company || '???'}</small>
          </span>
        </div>

        <div>
          <span>
            <FeatherIcon className={styles.starIcon} icon="star" size={20} />
            <small>{stars ?? 0}</small>
          </span>

          <span>
            <FeatherIcon icon="users" size={20} />
            <small>{followers ?? 0}</small>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default User;

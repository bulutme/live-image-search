import React from 'react';
import styles from './UserIcon.module.css';
import User from '../../assets/images/user.png';
import classNames from 'classnames';

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['div']> & {
  className?: string;
  url: string;
};

export default function UserIcon({ className, url, ...props }: Props) {
  return (
    <div className={classNames(styles.userIcon, className)} data-testid="user-icon" >
      {url ? (
        <img className={styles.icon} src={url} alt="User" />
      ) : (
        <img src={User} alt='User' className={styles.icon} />
      )}
    </div>
  );
}

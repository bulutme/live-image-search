import React from 'react';
import styles from './Card.module.css';
import UserIcon from '../UserIcon';
import LikeInfo from '../LikeInfo';


export interface IUserProps {
  profile_image: {
    medium: string;
  };
  name: string;
}

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['div']> & {
  className?: string;
  source: string;
  alt: string;
  user: IUserProps;
  like: number;
};

export default function Card({ className, source, alt, user, like, ...props }: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={source} alt={alt} />
      <div className={styles.information}>
        <UserIcon url={user.profile_image.medium} />
        <p className={styles.username}>{user.name}</p>
      </div>
      <LikeInfo count={like} />
    </div>
  );
}

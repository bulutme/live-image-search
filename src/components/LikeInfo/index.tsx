import React from 'react';
import styles from './LikeInfo.module.css';
import Heart from '../../assets/images/heart.png';
import classNames from 'classnames';

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['div']> & {
  className?: string;
  count: number;
};

export default function LikeInfo({ className, count, ...props }: Props) {
  return (
    <div className={classNames(styles.likeInfo, className)} data-testid="like-info">
        <img src={Heart} alt='Heart' className={styles.icon} />
        <p className={styles.count}>{count}</p>
    </div>
  );
}

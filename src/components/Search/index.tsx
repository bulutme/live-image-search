import React from 'react';
import styles from './Search.module.css';
import { useAppContext } from '../../context';

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['div']> & {
  callback: (val: string) => void;
};

export default function Search({ callback, ...props }: Props) {
  const { searchQuery } = useAppContext();

  return (
    <div className={styles.search}>
      <input
        defaultValue={searchQuery}
        onChange={(e) => callback(e.target.value)}
        className={styles.input}
        placeholder="Search images"
      />
    </div>
  );
}

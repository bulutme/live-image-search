/* eslint-disable no-sparse-arrays */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import styles from './Content.module.css';
import Card from '../Card';
import { Link } from 'react-router-dom';
import NoContent from '../NoContent';
import { IImageResult, useAppContext } from 'src/context';
import Spinner from '../Spinner';
import { debounce } from 'src/utils';
import ScrollToTopButton from '../ScrollToTopButton';

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['div']> & {
  className?: string;
};

export default function Content({ className }: Props) {
  const [page, setPage] = useState<number>(0);

  const { getImagesByQuery, searchQuery, images, loading, getDefaultImages } =
    useAppContext();

  useEffect(() => {
    searchQuery 
      ? getImagesByQuery(searchQuery, {
          page: page + 1,
          per_page: 10,
        })
      :
      getDefaultImages({
          page: page,
          per_page: 10,
        });
  }, [, searchQuery, page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const isAtBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight;

    if (isAtBottom) {
      debounce(
        setPage((prev) => prev + 1),
        1000
      );
    }
  }, []);

  return (
    <>
      {images.results && images.results.length > 0 ? (
        <>
          <div className={styles.content}>
            {images.results.map((item: IImageResult, index) => (
              <Link key={`${item.id + index}`} to={`/detail/${item.id}`}>
                <Card
                  key={`${item.id + index}`}
                  source={item.urls.small}
                  alt={item.alt_description}
                  user={item.user}
                  like={item.likes}
                />
              </Link>
            ))}
            <ScrollToTopButton />
          </div>
          <Spinner loading={loading} />
        </>
      ) : (
        <NoContent />
      )}
    </>
  );
}

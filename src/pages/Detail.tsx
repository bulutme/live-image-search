import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LikeInfo from 'src/components/LikeInfo';
import UserIcon from 'src/components/UserIcon';
import moment from 'moment/moment.js';
import { IImageResult, useAppContext } from 'src/context';
import TurnBackButton from 'src/components/TurnBackButton';

const Detail = () => {
  const { getSingleImage } = useAppContext();
  const [image, setImage] = useState<IImageResult | null>(null);
  const { id } = useParams();

  const getImageDetailCallback = useCallback(async (id: string) => {
    const response = await getSingleImage(id);
    setImage(response);
  }, [getSingleImage]);

  useEffect(() => {
    if (id) {
      getImageDetailCallback(id);
    }
  }, [getImageDetailCallback, id]);

  return (
    image && (
      <div className="detail" key={image.id}>
        <img
          className="detailImage"
          src={image?.urls?.regular}
          alt={image?.alt_description}
        />
        <div className="detailContent">
          <TurnBackButton />
          <div className="header">
            <span className="username">
              <UserIcon
                className="detailUserIcon"
                url={image?.user?.profile_image?.medium}
              />
              <p className="name">{image.user.name}</p>
            </span>
            <LikeInfo className="detailLikes" count={image.likes} />
          </div>
          <hr className="divider" />
          <div className="info">
            <p className="infoItem">
              {<strong>"{image.description ?? image.alt_description}"</strong>}
            </p>
            {image.user.location && (
              <p className="infoItem">
                {
                  <>
                    <strong>Location: </strong>
                    {image.user.location}
                  </>
                }
              </p>
            )}
            {image.created_at && (
              <p className="infoItem">
                {
                  <>
                    <strong>Date: </strong>
                    {moment(image.created_at).format('L')}
                  </>
                }
              </p>
            )}
            {image.user.social.portfolio_url && (
              <p className="infoItem">
                <strong>Portfolio: </strong>
                <a
                  target="_blank"
                  href={image.user.social.portfolio_url}
                  rel="noreferrer"
                >
                  <span>{image.user.social.portfolio_url}</span>
                </a>
              </p>
            )}
            {image.links.download && (
              <>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`${image.links.download}?client_id=os91_el6neXaPO2b069n3ZJdV1FClOONggnzT2XUnLk`}
                >
                  <strong>Download Link</strong>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Detail;

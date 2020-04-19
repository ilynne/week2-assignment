import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import AuthorImage from './AuthorImage';
import ArticleDateAndReadingTime from './ArticleDateAndReadingTime';

const Author = (props) => {
  const { authorData, postedDate, minutesToRead } = props
  const { name, image, isMediumMember } = authorData

  return (
    <div className={'author-container'}>
      <AuthorImage
        image={image}
        isMediumMember={isMediumMember}
      >
      </AuthorImage>
      <div className={'author-name'}>
        <p>{name}</p>
        <ArticleDateAndReadingTime
          postedDate={postedDate}
          minutesToRead={minutesToRead}
        >
        </ArticleDateAndReadingTime>
      </div>
      <div className={'bookmark'}>
        <FontAwesomeIcon icon={faBookmark} />
      </div>
    </div>
  );
}

Author.propTypes = {
  authorData: PropTypes.object.isRequired,
  postedDate: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired,
}

export default Author;

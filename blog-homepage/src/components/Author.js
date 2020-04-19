import React from 'react';
import PropTypes from 'prop-types';
import AuthorImage from './AuthorImage';
import ArticleDateAndReadingTime from './ArticleDateAndReadingTime';
import Bookmark from './Bookmark';

const Author = (props) => {
  const { authorData, postedDate, minutesToRead, isBookmarked, handleBookmarkClick } = props
  const { name, image, isMediumMember } = authorData

  return (
    <div className={'author-container'}>
      <AuthorImage
        image={image}
        isMediumMember={isMediumMember}
      >
      </AuthorImage>
      <div className={'author-name'}>
        <p><b>{name}</b></p>
        <ArticleDateAndReadingTime
          postedDate={postedDate}
          minutesToRead={minutesToRead}
        >
        </ArticleDateAndReadingTime>
      </div>
      <Bookmark
        isBookmarked={isBookmarked}
        handleBookmarkClick={handleBookmarkClick}
      >
      </Bookmark>
    </div>
  );
}

Author.propTypes = {
  authorData: PropTypes.object.isRequired,
  postedDate: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  handleBookmarkClick: PropTypes.func.isRequired,
}

export default Author;

import React from 'react';
import PropTypes from 'prop-types';
import AuthorImage from './AuthorImage';

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
        <p>{postedDate} * {minutesToRead}</p>
      </div>
      <div className={'bookmark'}>
        bkmk
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

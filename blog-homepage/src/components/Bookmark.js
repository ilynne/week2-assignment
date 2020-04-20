import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';

const Bookmark = (props) => {
  const { isBookmarked, handleBookmarkClick } = props

  return (
    <div
      className={'bookmark'}
      onClick={handleBookmarkClick}>
      <FontAwesomeIcon
        icon={isBookmarked ? fasBookmark : faBookmark}
        className={isBookmarked ? 'bookmarked' : ''}
      />
    </div>
  );
}

Bookmark.propTypes = {
  isBookmarked: PropTypes.bool.isRequired,
  handleBookmarkClick: PropTypes.func.isRequired,
}

export default Bookmark;

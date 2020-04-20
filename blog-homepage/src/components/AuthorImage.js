import React from 'react';
import PropTypes from 'prop-types';

const AuthorImage = (props) => {

  return (
    <div className={'author-image-container'}>
      <img
        src={props.image}
        alt={'name'}
        className={props.isMediumMember ? 'medium-member' : null} />
    </div>
  );
}

AuthorImage.propTypes = {
  image: PropTypes.string.isRequired,
  isMediumMember: PropTypes.bool.isRequired,
}

export default AuthorImage;

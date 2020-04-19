import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MemberPreviewIdentifier = (props) => {
  const { displayText, memberPreview } = props
  const memberPreviewText =
    displayText ? <span className={'article-identifier-text'}>Member preview</span> : null;

  return (
    memberPreview
      ? <span>
          <FontAwesomeIcon icon={faStar} />
          {memberPreviewText}
        </span>
      : null
  );
}

MemberPreviewIdentifier.propTypes = {
  displayText: PropTypes.bool.isRequired,
  memberPreview: PropTypes.bool.isRequired,
}

export default MemberPreviewIdentifier;

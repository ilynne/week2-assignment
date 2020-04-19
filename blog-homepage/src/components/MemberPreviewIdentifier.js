import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MemberPreviewIdentifier = (props) => {
  const { displayText, memberPreview } = props

  return (
    <div className={'article-identifiers'}>
      { memberPreview
        ? <span><FontAwesomeIcon icon={faStar} /></span>
        : null
      }
      { memberPreview && displayText
        ? <span className={'article-identifier-text'}>Member preview</span>
        : null
      }
    </div>
  );
}

MemberPreviewIdentifier.propTypes = {
  displayText: PropTypes.bool.isRequired,
  memberPreview: PropTypes.bool.isRequired,
}

export default MemberPreviewIdentifier;

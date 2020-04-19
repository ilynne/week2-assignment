import React from 'react';
import PropTypes from 'prop-types';

const MemberPreviewIdentifier = (props) => {
  const { displayText, memberPreview } = props

  return (
    <div className={'article-identifiers'}>
      { memberPreview
        ? <span>*</span>
        : null
      }
      { memberPreview && displayText
        ? <span>Member preview</span>
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

import React from 'react';
import PropTypes from 'prop-types';
import MemberPreviewIdentifier from './MemberPreviewIdentifier';

const ArticleIdentifiers = (props) => {
  const { hasAudioAvailable, memberPreview } = props

  return (
    <div className={'article-identifiers'}>
      { hasAudioAvailable
        ? <span>
            a
          </span>
        : null
      }
      <MemberPreviewIdentifier
        memberPreview={memberPreview}
        displayText={!hasAudioAvailable}
      ></MemberPreviewIdentifier>
    </div>
  );
}

ArticleIdentifiers.propTypes = {
  hasAudioAvailable: PropTypes.bool.isRequired,
  memberPreview: PropTypes.bool.isRequired,
}

export default ArticleIdentifiers;

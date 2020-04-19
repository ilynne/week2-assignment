import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import MemberPreviewIdentifier from './MemberPreviewIdentifier';

const ArticleIdentifiers = (props) => {
  const { hasAudioAvailable, memberPreview } = props

  return (
    <div className={'article-identifiers'}>
      { hasAudioAvailable
        ? <span>
            <FontAwesomeIcon icon={faVolumeUp} />
            <span className={'article-identifier-text'}>
              Audio available
            </span>
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

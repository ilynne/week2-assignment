import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';
import ArticleIdentifiers from './ArticleIdentifiers';

const Article = (props) => {
  const { articleData } = props
  const { author,
          image,
          title,
          description,
          postedDate,
          minutesToRead,
          hasAudioAvailable,
          memberPreview } = articleData

  return (
    <div className={'article-container'}>
      <div className={'article-content'}>
        <img src={image} alt={''} />
        <article>
          <ArticleIdentifiers
            hasAudioAvailable={hasAudioAvailable}
            memberPreview={memberPreview}
          >
          </ArticleIdentifiers>
          <h2>{title}</h2>
          <p>{description}</p>
          <Author
            authorData={author}
            postedDate={postedDate}
            minutesToRead={minutesToRead}
          >
          </Author>
        </article>
      </div>
    </div>
  );
}

Article.propTypes = {
  articleData: PropTypes.object.isRequired,
}

export default Article;

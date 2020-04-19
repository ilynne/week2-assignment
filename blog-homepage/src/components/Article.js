import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';
import ArticleIdentifiers from './ArticleIdentifiers';

const Article = (props) => {
  const { articleData } = props
  const { author,
          image,
          link,
          title,
          description,
          postedDate,
          minutesToRead,
          hasAudioAvailable,
          memberPreview } = articleData

  return (
    <div className={'article-container'}>
      <div className={'article-content'}>
        <a href={link}>
          <img src={image} alt={''} />
        </a>
        <article>
          <ArticleIdentifiers
            hasAudioAvailable={hasAudioAvailable}
            memberPreview={memberPreview}
          >
          </ArticleIdentifiers>
          <a href={link}>
            <h2>{title}</h2>
            <p>{description}</p>
          </a>
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

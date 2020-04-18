import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { articleData } = props
  const { image, title, description } = articleData

  return (
    <article>
      <img src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}

Article.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Article;

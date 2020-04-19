import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = (props) => {
  return (
    <div className={props.className}>
      <div className={'heading-container'}>
        <h1>{props.heading}</h1>
      </div>
      <div className={'article-list-container'}>
        {props.articleListData.map((articleData, i) =>
          <Article
            articleData={articleData}
            key={i}
          >
          </Article>
        )}
      </div>
    </div>
  );
}

ArticleList.propTypes = {
  heading: PropTypes.string.isRequired,
  articleListData: PropTypes.arrayOf(PropTypes.object),
}

export default ArticleList;

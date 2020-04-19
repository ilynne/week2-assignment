import React from 'react';
import Article from './Article';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className={'heading-container'}>
          <h1>{this.props.heading}</h1>
        </div>
        <div className={'article-list-container'}>
          {this.props.articleListData.map((articleData, i) =>
            <Article articleData={articleData}></Article>
          )}
        </div>
      </div>
    );
  }
}

export default ArticleList;

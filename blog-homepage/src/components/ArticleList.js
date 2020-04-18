import React from 'react';
import Article from './Article';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <h1>{this.props.heading}</h1>
        {this.props.articleListData.map((articleData, i) =>
          <Article articleData={articleData}></Article>
        )};
      </div>
    );
  }
}

export default ArticleList;

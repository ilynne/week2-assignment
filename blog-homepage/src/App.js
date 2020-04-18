import React from 'react';
import './App.css';
import './styles/articles.css'
import yourArticles from './_data/your-articles.json';
import missedArticles from './_data/missed-articles.json';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div className="App">
      <ArticleList
        className={'your-article-list'}
        heading={'For you'}
        articleListData={yourArticles}>
      </ArticleList>
      <ArticleList
        className={'missed-article-list'}
        heading={'In case you missed it'}
        articleListData={missedArticles}>
      </ArticleList>
    </div>
  );
}

export default App;

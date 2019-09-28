import React from 'react';
import PropTypes from 'prop-types';
import ArticleExpansionPanel from './article-expansion-panel/ArticleExpansionPanel.component';
import './ArticleList.css';

class ArticleList extends React.PureComponent {

  componentDidMount() {
    this.props.fetchArticles();
  }

  showArticleInNewTab = (url) => window.open(url)

  render() {
    const { articleList } = this.props;

    return (
      <div className='article-list-container'>
        {articleList.length > 0 &&
          articleList.map(article => <ArticleExpansionPanel key={article.id} article={article} onArticleClick={this.showArticleInNewTab} />)
        }
      </div>
    )
  }
}

ArticleList.propTypes = {
  articleList: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired
}

export default ArticleList;

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ChevronRightSharp from '@material-ui/icons/ChevronRightSharp';
import CalenderIcon from '@material-ui/icons/CalendarTodaySharp';

import './ArticleExpansionPanel.css';

const ArticleExpansionPanel = ({ article, onArticleClick }) => (
  <div className='article-expansion-panel-container' onClick={() => onArticleClick(article.url)}>
    <Grid container spacing={16}>
      <Grid xs={2} item className='container__centerItems'>
        <Avatar></Avatar>
      </Grid>
      <Grid xs={8} item>
        <p>{article.title}</p>
        <Grid container justify='space-between' alignItems='flex-end' spacing={8}>
          <Grid item xs={6}><p className='article-by'>{article.byline}</p></Grid>
          <Grid item xs={6}>
            <Grid container className='published-date' justify='flex-end' alignItems='center' spacing={8}>
              <Grid item><CalenderIcon /></Grid>
              <Grid item>{article.published_date}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={2} item className='container__centerItems'>
        <ChevronRightSharp />
      </Grid>
    </Grid>
  </div>
)

ArticleExpansionPanel.propTypes = {
  article: PropTypes.object.isRequired,
  onArticleClick: PropTypes.func.isRequired
}

export default ArticleExpansionPanel;
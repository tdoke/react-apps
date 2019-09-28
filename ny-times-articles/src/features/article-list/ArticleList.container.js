import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleListComponent from './ArticleList.component'
import { fetchArticles } from '../article-list/store/actions';

const mapStateToProps = (state) => ({
  articleList: state.articleListData.articleList,
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchArticles }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);

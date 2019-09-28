import React from 'react';
import { shallow } from 'enzyme';
import ArticleList from './ArticleList.component';

describe('ArticleList', () => {
  let props;
  beforeEach(() => {
    props = {
      articleList: {},
      fetchArticles: jest.fn()
    }
  });

  it('should render ArticleList', () => {
    const component = shallow(<ArticleList {...props} />);
    expect(component).toMatchSnapshot();
  });

});


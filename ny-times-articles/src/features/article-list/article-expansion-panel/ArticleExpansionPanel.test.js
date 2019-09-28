import React from 'react';
import { shallow } from 'enzyme';
import ArticleExpansionPanel from './ArticleExpansionPanel.component';

describe('ArticleExpansionPanel', () => {
  let props;
  let getComponent
  beforeEach(() => {
    props = {
      article: {
        title: 'world cup 2019',
        byline: 'Harsha Bhogle',
        url: 'https://www.cricbuzz.com',
        published_date: '2019/05/05'
      },
      onArticleClick: jest.fn()
    }
    getComponent = () => shallow(<ArticleExpansionPanel {...props} />);
  });

  it('should render ArticleExpansionPanel', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it('should call onArticleClick, on click', () => {
    const component = getComponent();
    component
      .find('div.article-expansion-panel-container')
      .at(0)
      .simulate('click');

    expect(props.onArticleClick).toBeCalled();
  });

});
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ArticleListRoutes from '../../features/article-list/routes';

const appRoutes = [...ArticleListRoutes];

export const RoutesConfig = () => (
  <BrowserRouter>
    <Switch>
      {appRoutes.map(routeProps => <Route {...routeProps} />)}
    </Switch>
  </BrowserRouter>
)
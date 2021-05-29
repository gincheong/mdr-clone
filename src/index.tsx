import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
// Components
import { Main } from './layouts';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/main" component={Main} />
      <Redirect from="/" to="/main/dashboard" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

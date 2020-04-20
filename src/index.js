import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostDetails from './PostDetails.js'
import * as serviceWorker from './serviceWorker';

import Notfound from './components/notFound.js'


import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom'
const Routing = () => {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/details/:id" component={PostDetails} />
          <Route component={Notfound} />
        </Switch>

      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

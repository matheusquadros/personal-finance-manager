import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home/index'
import About from './components/About/index'

function Routes() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={() => <div> 404!</div>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
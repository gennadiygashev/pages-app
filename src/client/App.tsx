import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import PagesList from './components/PagesList/PagesList'
import Page from './components/Page/Page'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/page/:name'>
            <Page />
          </Route>
          <Route path='/'>
            <PagesList />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

render(<App />, document.getElementById('app'))

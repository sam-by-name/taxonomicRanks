import React from 'react'
import Nav from './Nav'
import NavList from './NavList'
import Home from './Home'
import NavBody from './NavBody'

import {HashRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='home'>
          <div>
            <h1>Taxonomic Spanks</h1>
          </div>
          {/* <Link to='/home'></Link> */}
          <Route path='/' component={Nav} />
          <Route exact path='/' component={Home} />

          <Route exact path='/list/:rank' component={NavList} />
          <Route path='/list/:rank/:name' component={NavBody} />

        </div>
      </Router>
    )
  }
}

export default App

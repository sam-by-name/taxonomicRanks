import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../data/ranks'

const Nav = props => {
  return (
    <div className="nav">
      <h2>Nav</h2>
      <ul>
        {
          Object.keys(ranks).map((rank) => {
            return (
            // eslint-disable-next-line
            <li><Link to={`/list/${rank}`}>{rank}</Link></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Nav

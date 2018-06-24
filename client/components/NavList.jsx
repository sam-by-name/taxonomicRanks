import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../data/ranks'

const NavList = props => {
  const title = props.match.params.rank
  const rank = ranks[title]
  return (
    <div className="homeCont">
      <h2>{title}</h2>
      <ul>
        {
          rank.map(rank => {
            return (
              <li key={rank.id}><Link to={`/list/${title}/${rank.name}`}>{rank.name}</Link></li>
            )
          })
        }
      </ul>
      <Link to='/'><p className="return">Go Home</p></Link>
    </div>
  )
}

export default NavList

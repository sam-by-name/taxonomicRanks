import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../data/ranks'
import species from '../data/species'

const NavBody = props => {
  const title = props.match.params.rank
  const name = props.match.params.name
  const rank = ranks[title]

  for (let id in ranks[title]) {
    if (rank[id].name === name) {
      var description = rank[id].description
    }
  }

  // for (let i = 1; i <= species.length; i++) {
  //   if (species[i].class === title) {
  //     var obj = species[i]
  //   }
  // }

  return (
    <div className="homeCont">
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={`/list/${rank}/species`}>Show species</Link>
      <h3>Species</h3>
      <ul>
        <li key={obj.id}>{obj.name}</li>
      </ul>
      <Link to='/'><p className="return">Go Home</p></Link>
    </div>
  )
}

export default NavBody

import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './data/bands.json'

const NavBar = props => {
  let { id } = useParams()
  console.log({ id })
  return (
    <>
      {data.bands.map((band, index) => {
        return (
          <li key={index}>
            <Link to={band.urlPart}>{band.name}</Link>
          </li>
        )
      })}
    </>
  )
}

export default NavBar

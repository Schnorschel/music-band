import React from 'react'
import data from './data/bands.json'
// import { Link } from 'react-router-dom'

const Bands = props => {
  const band = data.bands.filter(item => {
    return item.urlPart === props.match.params.band
  })[0]

  return (
    <>
      <h1>{band.name}</h1>
      <p>
        <img
          align="left"
          src={'/images/' + band.imageFile}
          alt={band.urlPart}
        />
        {band.synopsis}
      </p>
      <p>
        {/* <Link to={band.moreInfo} target="_blank">More info</Link> */}
        <a href={band.moreInfo} target="_blank">
          More info
        </a>
      </p>
    </>
  )
}
export default Bands

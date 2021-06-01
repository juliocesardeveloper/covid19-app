import React from 'react'
import { Link } from 'react-router-dom'

export const CountryProfile = ({ Country, Confirmed, Deaths, Recovered }) => {



  return (
    <div className="col mt-4">
    <div className="card text-dark bg-light" style={ { minWidth: 350 } }>
        <div className="card-header"> { Country } </div>
        <div className="card-body">
          <h5 className="card-title"> Casos confirmados: { Confirmed } </h5>
          <p className="card-text text-danger"> Muertes: { Deaths } </p>
          <p className="card-text text-success"> Recuperados: { Recovered } </p>
        </div>
    </div>
    <div>
      <Link to="/">
        Volver
      </Link>
    </div>

  </div>
  )
}

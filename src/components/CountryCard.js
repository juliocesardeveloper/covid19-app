import React from 'react'

export const CountryCard = ({ Country, TotalConfirmed, TotalDeaths, TotalRecovered }) => {
  return (
    <div className="col mt-4">
      <div className="card text-dark bg-light" style={ { minWidth: 350 } }>
          <div className="card-header"> { Country } </div>
          <div className="card-body">
            <h5 className="card-title"> Casos confirmados: { TotalConfirmed } </h5>
            <p className="card-text text-danger"> Muertes: { TotalDeaths } </p>
            <p className="card-text text-success"> Recuperados: { TotalRecovered } </p>
          </div>
      </div>

    </div>
  )
}

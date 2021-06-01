import React, { useContext, useEffect } from 'react'
import { CountryContext } from '../context/country/CountryContext'
import { CountryCard } from './CountryCard'

export const CountriesList = () => {

  const { countries, getCountries } = useContext(CountryContext)

  useEffect(() => {
    getCountries()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
      {
        <div className="mt-5">
          <h1>Lista de países</h1>
          <div className="container">
            <div className="row">
              {
                countries.map( nation =>  (
                  <CountryCard
                    key={ nation.ID }
                    { ...nation }
                  />
                ))
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

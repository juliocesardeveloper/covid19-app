
import axios from 'axios'
import React, { useReducer } from 'react'
import { CountryContext } from './CountryContext'
import { CountryReducer } from './CountryReducer'

export const CountryState = (props) => {

  const initialState = {
    countries: [],
    country: '',
    selectedCountry: null
  }

  const [state, dispatch] = useReducer(CountryReducer, initialState)

  const getCountries = async () => {
    const res = await axios.get('https://api.covid19api.com/summary')
    dispatch({
      type: 'GET_COUNTRIES',
      payload: res.data.Countries
    })
  }
  const getCountryProfile = async ( country ) => {
    const res = await axios.get(`https://api.covid19api.com/total/country/${ country }`)
    console.log(res.data[res.data.length - 1]);
    dispatch({
      type: 'GET_COUNTRY_PROFILE',
      payload: res.data[res.data.length - 1]
    })
    console.log(country);
  }

  return (
    <CountryContext.Provider value={{
      countries: state.countries,
      country: state.country,
      selectedCountry: state.selectedCountry,
      getCountries,
      getCountryProfile
    }}>

      { props.children }

    </CountryContext.Provider>
  )

}

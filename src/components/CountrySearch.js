import React, { useContext } from 'react'
import { CountryContext } from '../context/country/CountryContext';
import { useForm } from '../hooks/useForm';
import { CountryProfile } from './CountryProfile';

export const CountrySearch = () => {


  const { selectedCountry, getCountryProfile } = useContext(CountryContext)

  const [ formValues, handleInputChange ] = useForm({
    searchText: ""
  });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    getCountryProfile( searchText )
  }

  return (
    <div className="container">
      <div>
          <form className="row mt-5 justify-content-center" onSubmit={ handleSearch }>
            <input
              type="text"
              placeholder="Encuentra tu país"
              className="col-7 form-control mr-3"
              name="searchText"
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button
              type="submit"
              className="btn btn-outline-primary "
            >
              Buscar...
            </button>

          </form>
          {
            selectedCountry
              ? <div className="mt-5">
                  <h1>Resultado de la búsqueda</h1>
                  <CountryProfile { ...selectedCountry } />
                </div>
              : <div className="mt-5">
                  <h1>Busca algún país</h1>
                </div>
          }
        </div>
    </div>
  )
}

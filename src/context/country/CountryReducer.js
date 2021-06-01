import { GET_COUNTRIES, GET_COUNTRY_PROFILE } from "../types";

export const CountryReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };

    case GET_COUNTRY_PROFILE:
      return {
        ...state,
        selectedCountry: payload,
      };

    default:
      return state;
  }
};

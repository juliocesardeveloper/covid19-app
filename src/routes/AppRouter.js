import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { CountriesList } from '../components/CountriesList';
import { CountryProfile } from '../components/CountryProfile';
import { CountrySearch } from '../components/CountrySearch';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ CountriesList } />
          <Route exact path="/results" component={ CountryProfile } />
          <Route exact path="/buscar" component={ CountrySearch } />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  )
}

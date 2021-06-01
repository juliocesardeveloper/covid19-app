import './App.css';

//Context
import { CountryState } from './context/country/CountryState';
import { AppRouter } from './routes/AppRouter';


function App() {
  return (
    <CountryState>
      <AppRouter />
    </CountryState>
  );
}

export default App;

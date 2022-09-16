import './App.css';
import Beers from "./components/beers/BeerList"
import NewBeers from "./components/beers/NewBeer"
import RandomBeer from "./components/beers/RandomBeer"
import { Route, Routes } from 'react-router-dom';
import {HomeScreen, BeersScreen, RandomBeerScreen  } from './screens'
import BeerDetail from './screens/beers/BeerDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/beers' element={<BeersScreen />} />
        <Route path='/beers' element={<BeersScreen />} />
        <Route path='/beers/:beerId' element={<BeerDetail />} />
        <Route path='/random-beer' element={<RandomBeerScreen/>} />
      </Routes>
    </div>
  );
}

export default App;

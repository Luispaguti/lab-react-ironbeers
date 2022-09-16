import React from 'react'
import Beers from "../../components/beers/BeerList"
import NewBeers from "../../components/beers/RandomBeer"
import RandomBeer from "../../components/beers/RandomBeer"

function HomeScreen() {
  return (
    <div>
      <Beers/>
      <NewBeers/>
      <RandomBeer/>
    </div>
  )
}

export default HomeScreen
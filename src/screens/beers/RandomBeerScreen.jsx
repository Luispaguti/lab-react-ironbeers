import React from 'react'
import RandomBeer from '../../components/beers/RandomBeer'
import NavBar from '../../components/ui/navbar/NavBar'

function RandomBeersScreen() {
  return (
    <div>
      <NavBar/>
      <RandomBeer/>
    </div>
  )
}

export default RandomBeersScreen
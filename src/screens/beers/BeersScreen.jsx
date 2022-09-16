import React from 'react'
import BeerList from '../../components/beers/BeerList'
import NavBar from '../../components/ui/navbar/NavBar'

function BeersScreen() {
  return (
    <div>
      <NavBar/>
      <BeerList/>
    </div>
  )
}

export default BeersScreen
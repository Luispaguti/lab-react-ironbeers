import React from 'react'
import BeerDetail from '../../components/beers/BeerDetail'
import NavBar from '../../components/ui/navbar/NavBar'

function BeersScreen() {
  return (
    <div>
      <NavBar/>
      <BeerDetail/>
    </div>
  )
}

export default BeersScreen
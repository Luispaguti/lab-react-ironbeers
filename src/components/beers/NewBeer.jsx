import React from 'react'
import image2 from '../../assets/new-beer.png'


function NewBeers() {
  return (
    <div className='container'>
      <div class="card">
      <img src={image2} alt="image2" />
        <div class="card-body">
          <h5 class="card-title">NewBeers</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>

      </div>

    </div>
  )

}

export default NewBeers
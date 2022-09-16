import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


function RandomBeer() {
  const { beerId  } = useParams()
  console.log(beerId)

  const [randomBeer, setRandomBeer] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        console.log(res.data)
        setRandomBeer(res.data)
        setIsLoading(false)
      })
  }, [beerId]);


  if(isLoading)
  return <h2> ... is Loading</h2>

  const { name, tagline, image_url, first_brewed, attenuation_level, description, contributed_by} = randomBeer

  return (
   <div className='container'>
    <div className="card">  
      <button><Link to='/beers'>Go back</Link></button>
      <img src={image_url} class="card-img-top" width='30%' alt='beer'/>
      <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <span><b>{tagline}</b></span>
      <span>{first_brewed}</span>
      <p>{attenuation_level}</p>
      <p>{description}</p>
      <p>{contributed_by}</p>
      </div>
      
      </div> 
   </div>
  )

}


export default RandomBeer
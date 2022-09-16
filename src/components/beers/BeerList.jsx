import image1 from '../../assets/beers.png'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Beers() {
  const [allBeers, setAllBeers] = useState([]);


  useEffect(() => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((res)=>{
      setAllBeers(res.data);
      console.log(res.data)
    })
  }, []);

  return (
    <div className='container'>
      {allBeers.map((beer, i) => {
        return (
          <div key={beer + i}>
               <Link to={`/beers/${beer._id}`}>
               <img src={beer.image_url} width="120px" alt="beer"/>
               <span><b>{beer.name}</b></span>
               <span><b>{beer.tagline}</b></span>
               <span>{beer.contributed_by}</span>
               </Link>
               
            </div>
        )
      }  )}
    </div>
      )
} 

export default Beers
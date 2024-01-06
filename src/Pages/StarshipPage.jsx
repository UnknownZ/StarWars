import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/AppContext'

function StarshipPage() {
  const { index } = useParams()
  const [starship, setStarship] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { store: { starships }, actions: { fetchURL } } = useContext(Context)
  const starshipURL = starships[index].url

  useEffect(() => {
    if (starship.length === 0) {
      fetchObject(starshipURL);
    }
    else {
      setIsLoading(false);
    }
  }, []);

  const fetchObject = async (URL) => {
    let data = await fetchURL(URL)
    setIsLoading(false)
    setStarship(data)
  }

  return (
    <>
      {isLoading ? (
        <div>
          Loading data...
        </div>
      ) :
        <div>
          <h1>{starship.name}</h1>
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>length: {starship.length}</p>
          <p>crew: {starship.crew}</p>
          <p>Passengers: {starship.passengers}</p>
          <p>Cargo capacity: {starship.cargo_capacity}</p>
          <p>Starship class: {starship.starship_class}</p>
        </div>
      }
    </>
  )
}

export default StarshipPage
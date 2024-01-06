import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/AppContext'

function PlanetPage () {
  const { index } = useParams()
  const [planet, setPlanet] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { store: { planets }, actions: { fetchURL } } = useContext(Context)
  const planetURL = planets[index].url

  useEffect(() => {
    if (planet.length === 0) {
      fetchObject(planetURL);
    }
    else {
      setIsLoading(false);
    }
  }, []);

  const fetchObject = async (URL) => {
    let data = await fetchURL(URL)
    setIsLoading(false)
    setPlanet(data)
  }

  return (
    <>
      {isLoading ? (
        <div>
          Loading data...
        </div>
      ) :
        <div>
          <h1>{planet.name}</h1>
          <p>Rotation period: {planet.rotation_period}</p>
          <p>Orbital period: {planet.orbital_period}</p>
          <p>Diameter: {planet.diameter}</p>
          <p>Climate: {planet.climate}</p>
          <p>Population: {planet.population}</p>
        </div>
      }
    </>
  )
}

export default PlanetPage
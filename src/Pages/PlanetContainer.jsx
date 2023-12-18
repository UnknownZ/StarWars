import { React, useContext, useState, useEffect} from 'react'
import PlanetCard from '../Components/PlanetCard'
import { Context } from '../context/AppContext'
import URLS from '../config'

const PlanetContainer = () => {
  const {store: { planets }, actions: {fetchURL, setPlanList }}  = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(planets)
    {
      if(planets.length === 0){
        fetchPlanets(URLS.URL_Planets)
      }
      else
      setIsLoading(true)
    }
    else 
    fetchPlanets(URLS.URL_Planets)
  }, [])

  const fetchPlanets = async (URL) => {
    let tempURL = URL
    let planets = [];
    let data
    do {
        data = await fetchURL(tempURL)
        data.results.map((planet) => {
            planets.push(planet)
        })
        tempURL = data.next
    }
    while (tempURL)
    setIsLoading(false)
    setPlanList(planets)
}

  return(
    <div>
    {isLoading ? (
      <div>
        Loading data...
      </div>
    ) : (
      <>
      <div className="row g-4">
        <div className="card-group">
          {
            planets.map((item) => {
             return <PlanetCard 
                key={item.url}
                name={item.name}
                orbital_period={item.orbital_period}
                population={item.population}
              />
            })
          }
        </div>
      </div>
    </>
    )}
    </div>
  )
}

export default PlanetContainer
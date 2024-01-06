import { React, useContext, useState, useEffect} from 'react'
import PlanetCard from '../Components/PlanetCard'
import { Context } from '../context/AppContext'
import URLS from '../config'

const PlanetContainer = () => {
  const {store: { planets }, actions: {fetchURL, setPlanList }}  = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)
  const [nextPage, setNextPage] = useState("")
  const [previousPage, setPreviousPage] = useState("")

  useEffect(() => {
    if (planets.length === 0) {
      fetchPlanets(URLS.URL_Planets);
    }
    else {
      setIsLoading(false);
    }
  }, [])

  const fetchPlanets = async (URL) => {
    let data = await fetchURL(URL)
    setPlanList(data.results)
    setNextPage(data.next)
    setPreviousPage(data.previous)
    setIsLoading(false)
}

const goToNext = () => {
  fetchPlanets(nextPage)
  setIsLoading(true)
}

const goToPrevious = () => {
  fetchPlanets(previousPage)
  setIsLoading(true)
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
            planets.map((item,i) => {
             return <PlanetCard 
                key={item.url}
                name={item.name}
                orbital_period={item.orbital_period}
                population={item.population}
                index={i}
              />
            })
          }
          {previousPage ?
                <button className='btn btn-primary cols-1' onClick={goToPrevious}>
                  Previous Page
                </button>
                :
                <></>}

              {nextPage ?
                <button className='btn btn-primary cols-1' onClick={goToNext}>
                  Next page
                </button >
                :
                <></>
              }
        </div>
      </div>
    </>
    )}
    </div>
  )
}

export default PlanetContainer
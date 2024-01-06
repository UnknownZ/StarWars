import { React, useContext, useEffect, useState } from 'react'
import StarshipCard from '../Components/StarshipCard'
import { Context } from '../context/AppContext'
import URLS from '../config'

const StarshipContainer = () => {
  const {store: { starships }, actions: { fetchURL, setShipList }}  = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)
  const [nextPage, setNextPage] = useState("")
  const [previousPage, setPreviousPage] = useState("")

  useEffect(() => {
    if (starships.length === 0) {
      fetchStarships(URLS.URL_Starships);
    }
    else {
      setIsLoading(false);
    }
  }, [])

  const fetchStarships = async (URL) => {
    let data = await fetchURL(URL)
    setShipList(data.results)
    setNextPage(data.next)
    setPreviousPage(data.previous)
    setIsLoading(false)
}

const goToNext = () => {
  fetchStarships(nextPage)
  setIsLoading(true)
}

const goToPrevious = () => {
  fetchStarships(previousPage)
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
            starships.map((item,i) => {
             return <StarshipCard 
                key={item.url}
                name={item.name}
                model={item.model}
                total_crew={item.crew}
                index = {i}
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

export default StarshipContainer
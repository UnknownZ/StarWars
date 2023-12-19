import { React, useContext, useEffect, useState } from 'react'
import StarshipCard from '../Components/StarshipCard'
import { Context } from '../context/AppContext'
import URLS from '../config'

const StarshipContainer = () => {
  const {store: { starships }, actions: { fetchURL, setShipList }}  = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(starships)
    {
      if(starships.length === 0){
        fetchStarships(URLS.URL_Starships)
      }
      else
      setIsLoading(false)
    }
    else 
    fetchStarships(URLS.URL_Starships)
  }, [])

  const fetchStarships = async (URL) => {
    let tempURL = URL
    let starships = [];
    let data
    do {
        data = await fetchURL(tempURL)
        data.results.map((starship) => {
            starships.push(starship)
        })
        tempURL = data.next
    }
    while (tempURL)
    setIsLoading(false)
    setShipList(starships)
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
            starships.map((item) => {
             return <StarshipCard 
                key={item.url}
                name={item.name}
                model={item.model}
                total_crew={item.crew}
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

export default StarshipContainer
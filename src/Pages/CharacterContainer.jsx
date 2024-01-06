import { React, useContext, useEffect, useState } from 'react'
import CharacterCard from '../Components/CharacterCard'
import { Context } from '../context/AppContext'
import URLS from '../config'

function CharacterContainer() {
  const { store: { people }, actions: { fetchURL, setCharList } } = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)
  const [nextPage, setNextPage] = useState("")
  const [previousPage, setPreviousPage] = useState("")

  useEffect(() => {
    if (people.length === 0) {
      fetchCharacters(URLS.URL_Characters);
    }
    else {
      setIsLoading(false);
    }

  }, []);

  const fetchCharacters = async (URL) => {
    let data = await fetchURL(URL)
    setCharList(data.results)
    setNextPage(data.next)
    setPreviousPage(data.previous)
    setIsLoading(false)
  }

  const goToNext = () => {
    fetchCharacters(nextPage)
    setIsLoading(true)
  }

  const goToPrevious = () => {
    fetchCharacters(previousPage)
    setIsLoading(true)
  }

  return (
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
                people.map((item, i) => {
                  return <CharacterCard
                    key={item.url}
                    name={item.name}
                    hairColor={item.hair_color}
                    eyeColor={item.eye_color}
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

export default CharacterContainer
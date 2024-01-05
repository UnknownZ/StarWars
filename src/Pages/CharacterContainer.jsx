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
    const fetchData = async () => {
      if (people.length == 0) {
        await fetchCharacters(URLS.URL_Characters);

      }
      setIsLoading(false);
    };
    fetchData();
    console.log(previousPage)
    console.log(nextPage)
  }, []);

  const fetchCharacters = async (URL) => {
    let data = await fetchURL(URL)
    setCharList(data.results)
    setNextPage(data.next)
    setPreviousPage(data.previous)
    setIsLoading(false)
  }

  const goToNext = () => {
      setIsLoading(true)
      fetchCharacters(nextPage)
  }

  const goToPrevious = () => {
      setIsLoading(true)
      fetchCharacters(previousPage)
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
                people.map((item) => {
                  return <CharacterCard
                    key={item.url}
                    name={item.name}
                    hairColor={item.hair_color}
                    eyeColor={item.eye_color}
                  />
                })
              }
              {previousPage ?
                <button className='btn btn-primary cols-1' onClick={goToNext}>
                  Previous Page
                </button>
                :
                <></>}

              {nextPage ?
                <button className='btn btn-primary cols-1' onClick={goToPrevious}>
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